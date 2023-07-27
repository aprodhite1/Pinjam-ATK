import Header from "@/components/header";
import AddList from "./addList";
import DeleteList from "./deleteList";
import UpdateList from "./updateList";
import Footer from "@/components/footer";

type list = {
  id: string;
  nama: string;
  atk: string;
  jumlah: number;
};
async function getList() {
  const res = await fetch("http://localhost:5000/list", { cache: "no-store" });
  return res.json();
}

export default async function listATK() {
  const List: list[] = await getList();

  return (
    <>
      <Header />
      <div className="bg-blue-50 h-full">
        <div className="p-10">
          <div className="py-2">
            <AddList />
          </div>
          <table className="table w-full">
            <thead className="bg-slate-100">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Alat Tulis kantor</th>
                <th>Jumlah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {List.map((List, index) => (
                <tr key={List.id}>
                  <td>{index + 1}</td>
                  <td>{List.nama}</td>
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
