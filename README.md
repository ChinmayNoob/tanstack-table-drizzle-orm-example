# TanStack Table Example with Drizzle ORM

A modern, feature-rich data table implementation using **TanStack Table v8**, **Drizzle ORM**, and **Next.js 15**. This project demonstrates advanced table functionality including server-side pagination, filtering, and a beautiful UI built with shadcn/ui components.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TanStack Table](https://img.shields.io/badge/TanStack%20Table-v8-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-latest-green)

## ✨ Features

### 🎯 Core Functionality
- **Server-side pagination** - Efficient data loading with configurable page sizes
- **Advanced filtering** - Multiple filter operators with type-specific controls
- **Real-time search** - Instant filtering as you type
- **Loading states** - Skeleton loading animations during data fetching

### 🔍 Filter Operations
- **Text filters**: Contains, Equals, Starts with, Ends with
- **Date filters**: Equals, Before, After (with calendar picker)
- **Numeric filters**: Equals, Greater than, Less than
- **Multiple filters** - Combine multiple conditions simultaneously


## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- pnpm, npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tanstack-table-example
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your database connection in `.env.local`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   ```

4. **Set up the database**
   ```bash
   # Generate migration files
   npx drizzle-kit generate
   
   # Run migrations
   npx drizzle-kit migrate
   
   # Optional: Open Drizzle Studio to view your database
   npx drizzle-kit studio
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📊 Database Schema

The application uses a simple users table with the following structure:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  date DATE NOT NULL
);
```

## 🎯 Project Structure

```
tanstack-table-example/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Main page component
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ts-table/            # Table-specific components
│   │   ├── columns.tsx      # Column definitions
│   │   ├── data-table.tsx   # Main table wrapper
│   │   ├── pagination.tsx   # Pagination controls
│   │   ├── search.tsx       # Filter/search component
│   │   └── table.tsx        # Reusable table component
│   └── ui/                  # shadcn/ui components
├── db/                      # Database configuration
│   ├── index.ts            # Database connection
│   └── schema.ts           # Drizzle schema definitions
├── lib/
│   ├── api/
│   │   └── user.ts         # Server actions for data fetching
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript type definitions
└── drizzle.config.ts       # Drizzle ORM configuration
```

## 🔧 Key Components

### DataTable Component
The main table component that orchestrates:
- Data fetching with server actions
- State management for pagination and filters
- TanStack Table configuration
- Loading states

### Search Component
Advanced filtering interface featuring:
- Field selection (Name, Company, Age, Date)
- Operator selection based on field type
- Value input with type-specific controls
- Visual filter badges
- Filter management (add/remove)

### Table Component
Reusable table renderer with:
- Header rendering with sorting
- Row rendering with cell formatting
- Loading skeleton states
- Empty state handling
- Pagination integration

## 🎨 Customization

### Adding New Columns
1. Update the database schema in `db/schema.ts`
2. Add column definition in `components/ts-table/columns.tsx`
3. Update the TypeScript types in `types/index.ts`
4. Modify the API function in `lib/api/user.ts`

## 📈 Performance Features

- **Server-side pagination** - Only fetch required data
- **Optimized queries** - Drizzle ORM with prepared statements
- **Loading states** - Immediate user feedback
- **Type safety** - Full TypeScript coverage
- **Modern React** - Uses React 19 features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [TanStack Table Documentation](https://tanstack.com/table/latest)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🙋‍♂️ Support

If you have any questions or run into issues, please:
1. Search existing [issues](../../issues)
2. Create a new issue if needed

---