"use server"

import { db } from "@/db"
import { usersTable } from "@/db/schema"
import { DatabaseSchema } from "@/types"
import { FilterType } from "@/components/ts-table/search"
import { count, desc, and, ilike, eq, gt, lt } from "drizzle-orm"

export async function fetchDataForTableView(options: {
    pageIndex: number
    pageSize: number
    filters: FilterType[]
}): Promise<{ data: DatabaseSchema[]; count: number }> {
    const { pageIndex, pageSize, filters } = options

    // Build where conditions based on filters
    const whereConditions = filters.map((filter) => {
        // Get the column reference based on field name
        const getColumn = (fieldName: string) => {
            switch (fieldName) {
                case "name":
                    return usersTable.name
                case "company":
                    return usersTable.company
                case "age":
                    return usersTable.age
                case "date":
                    return usersTable.date
                default:
                    return null
            }
        }

        const column = getColumn(filter.field)
        if (!column) return null

        switch (filter.operator) {
            case "contains":
                return ilike(column, `%${filter.value}%`)
            case "equals":
                return eq(column, filter.value)
            case "startsWith":
                return ilike(column, `${filter.value}%`)
            case "endsWith":
                return ilike(column, `%${filter.value}`)
            case "before":
                return lt(column, filter.value)
            case "after":
                return gt(column, filter.value)
            case "greaterThan":
                return gt(column, filter.value)
            case "lessThan":
                return lt(column, filter.value)
            default:
                return null
        }
    }).filter((condition): condition is NonNullable<typeof condition> => condition !== null)

    const whereClause = whereConditions.length > 0 ? and(...whereConditions) : undefined

    try {
        // Get total count
        const [countResult] = await db
            .select({ count: count() })
            .from(usersTable)
            .where(whereClause)

        // Get paginated data
        const data = await db
            .select({
                name: usersTable.name,
                company: usersTable.company,
                age: usersTable.age,
                date: usersTable.date
            })
            .from(usersTable)
            .where(whereClause)
            .orderBy(desc(usersTable.date))
            .limit(pageSize)
            .offset(pageIndex * pageSize)

        // Convert date strings to Date objects to match DatabaseSchema
        const convertedData: DatabaseSchema[] = data.map(row => ({
            ...row,
            date: new Date(row.date)
        }))

        return {
            data: convertedData,
            count: countResult.count
        }
    } catch (error) {
        console.error("Error fetching data:", error)
        return { count: 0, data: [] }
    }
}
