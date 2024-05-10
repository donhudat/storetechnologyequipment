import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

function Table1() {
  return (
    <div>
      <h1 className=" text-6xl h-[60px] text-center mt-8"> CHÍNH SÁCH KHÁCH HÀNG THÂN THIẾT</h1>
      <Table className="" aria-label="Chính Sách Khách Hàng">
        <TableHeader className="text-9xl">
          <TableColumn className=" text-5xl border border-solid border-zinc-950 bg-[#ccc] h-[80px] ">Quyền Lợi Thành Viên</TableColumn>
          <TableColumn className=" text-5xl border border-solid border-zinc-950 bg-[#ccc] h-[80px] ">Mức Điểm Tích Lũy(100.000 đồng = 1 điểm) </TableColumn>
          <TableColumn className=" text-5xl border border-solid border-zinc-950 bg-[#ccc] h-[80px] ">Mức Giảm Giá</TableColumn>
          <TableColumn className=" text-5xl border border-solid border-zinc-950 bg-[#ccc] h-[80px] ">Điều Kiện Duy Trì Hạng Thẻ(Số điểm cần tích lũy trong 12 tháng)</TableColumn>
          <TableColumn className=" text-5xl border border-solid border-zinc-950 bg-[#ccc] h-[80px] ">Ưu Đãi Sinh Nhật</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow className="items-center h-44 " key="1">
            <TableCell className="text-center text-4xl font-semibold  line-height h-200 border border-solid border-zinc-950">Member</TableCell>
            <TableCell className="text-center text-4xl font-semibold  line-height h-200 border border-solid border-zinc-950"> 0-499 Điểm </TableCell>
            <TableCell className="text-center text-6xl font-semibold   line-height h-200 border border-solid border-zinc-950"> </TableCell>
            <TableCell className="text-center text-4xl font-semibold  line-height h-200 border border-solid border-zinc-950"> </TableCell>
            <TableCell className="text-center text-6xl font-semibold   line-height h-200 border border-solid border-zinc-950">20%</TableCell>
          </TableRow>
          <TableRow className="items-center h-44" key="2">
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950">Sliver</TableCell>
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950"> 0-499 Điểm </TableCell>
            <TableCell className="text-center text-6xl font-semibold  line-height h-200 border border-solid border-zinc-950">5%</TableCell>
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950">250 Điểm</TableCell>
            <TableCell className="text-center text-6xl font-semibold  line-height h-200 border border-solid border-zinc-950">20%</TableCell>
          </TableRow>
          <TableRow className="items-center h-44" key="3">
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950">Gold</TableCell>
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950"> 1000-1999 Điểm </TableCell>
            <TableCell className="text-center text-6xl font-semibold  line-height h-200 border border-solid border-zinc-950">10%</TableCell>
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950">750 Điểm</TableCell>
            <TableCell className="text-center text-6xl font-semibold  line-height h-200 border border-solid border-zinc-950">20%</TableCell>
          </TableRow>
          <TableRow className="items-center h-44" key="4">
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950">Diamond</TableCell>
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950"> 2000 Điểm </TableCell>
            <TableCell className="text-center text-6xl font-semibold  line-height h-200 border border-solid border-zinc-950">20%</TableCell>
            <TableCell className="text-center text-4xl font-semibold line-height h-200 border border-solid border-zinc-950">1250 Điểm</TableCell>
            <TableCell className="text-center text-6xl font-semibold  line-height h-200 border border-solid border-zinc-950">25%</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  );
}

export default Table1