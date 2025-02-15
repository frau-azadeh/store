"use client";

import { useAppSelector } from "@/store/hooks";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function InvoiceTable() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">پیش‌فاکتور محصولات</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>نام محصول</TableHead>
            <TableHead>تعداد</TableHead>
            <TableHead>قیمت واحد</TableHead>
            <TableHead>قیمت کل</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price.toLocaleString()} تومان</TableCell>
              <TableCell>
                {(item.price * item.quantity).toLocaleString()} تومان
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {cartItems.length === 0 && (
        <p className="text-gray-500 mt-4">سبد خرید خالی است!</p>
      )}
    </div>
  );
}
