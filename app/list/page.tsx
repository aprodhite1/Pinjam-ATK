import Header from "@/components/header";
import AddList from "./addList";
import DeleteList from "./deleteList";
import UpdateList from "./updateList";
import Footer from "@/components/footer";
// import XLSX from "xlsx";

type list = {
  id: string;
  nama: string;
  divisi: string;
  atk: string;
  jumlah: number;
};
async function getList() {
  const res = await fetch("http://localhost:5000/list", { cache: "no-store" });
  return res.json();
}

// export function downloadExcel(List) {
//   const worksheet = XLSX.utils.json_to_sheet(List);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//   //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
//   //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
//   XLSX.writeFile(workbook, "DataSheet.xlsx");
// }

export default async function listATK() {
  const List: list[] = await getList();

  return (
    <>
      <Header />
      <div className=" ">
        <div className="p-10">
          <div className="py-2 flex">
            <AddList />
            {/* <button className="btn" onClick={() => downloadExcel(List)}>
              Download As Excel
            </button> */}
          </div>
          <table className="table w-full ">
            <thead className="bg-[#75C2F6] text-black text-xl font-normal ">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Divisi</th>
                <th>Alat Tulis kantor</th>
                <th>Jumlah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-blue-50 ">
              {List.map((List, index) => (
                <tr key={List.id}>
                  <td>{index + 1}</td>
                  <td>{List.nama}</td>
                  <td>{List.divisi}</td>
                  <td>{List.atk}</td>
                  <td>{List.jumlah}</td>
                  <td className="flex">
                    <div className="mr-1">
                      <UpdateList {...List} />
                    </div>

                    <DeleteList {...List} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
