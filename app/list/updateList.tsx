"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

type List = {
  id: string;
  nama: string;
  divisi: string;
  jumlah: number;
  atk: string;
};

export default function UpdateProduct(List: List) {
  const [nama, setNama] = useState(List.nama);
  const [atk, setAtk] = useState(List.atk);
  const [jumlah, setJumlah] = useState(List.jumlah);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [Id, setId] = useState(List.id);
  const [divisi, setDivisi] = useState(List.divisi);

  const router = useRouter();

  async function handleUpdate(e: SyntheticEvent) {
    e.preventDefault();

    setIsMutating(true);

    await fetch(`http://localhost:5000/list/${List.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: Id,
        nama: nama,
        divisi: divisi,
        atk: atk,
        jumlah: jumlah,
      }),
    });

    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {List.nama}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama</label>
              <div className="text-xl">
                <select
                  className="hover:cursor-pointer text-sm block appearance-none w-full border border-abutua text-hitam py-3 px-4  pr-8 rounded-lg leading-tight focus:outline-none focus:border-birumuda focus:-border-1 ring-slate-300"
                  id="nama"
                  name="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                >
                  <option value="">Pilih Pegawai</option>
                  <option value="Mulia Andestar, SST, M.Si">
                    Mulia Andestar, SST, M.Si
                  </option>
                  <option value="Mona Priditta Silva, S.ST">
                    Mona Priditta Silva, S.ST
                  </option>
                  <option value="Santi Elvi, SE">Santi Elvi, SE</option>
                  <option value="Dewi Ekawati, S.ST">Dewi Ekawati, S.ST</option>
                  <option value="Miftahul Husna, S.Tr.Stat.">
                    Miftahul Husna, S.Tr.Stat.
                  </option>
                  <option value="Boy Azef, S.ST">Boy Azef, S.ST</option>
                  <option value="Ratih Maharani, S.Si.">
                    Ratih Maharani, S.Si.
                  </option>
                  <option value="Widiatul Mardiyah, S.ST">
                    Widiatul Mardiyah, S.ST
                  </option>
                  <option value="Bakri Malik Ahmad Ismael, S.ST">
                    Bakri Malik Ahmad Ismael, S.ST
                  </option>
                  <option value="Maira Dwi Putri, SP">
                    Maira Dwi Putri, SP
                  </option>
                  <option value="Welda Roza, S.Si">Welda Roza, S.Si</option>
                  <option value="Firna Stephanie, S.ST">
                    Firna Stephanie, S.ST
                  </option>
                  <option value="Amelia Rizki Saraswati S.Tr.Stat.">
                    Amelia Rizki Saraswati S.Tr.Stat.
                  </option>
                  <option value="Ahmad Afif Adrinanta, S.Tr.Stat.">
                    Ahmad Afif Adrinanta, S.Tr.Stat.
                  </option>
                  <option value="Jayusman">Jayusman</option>
                  <option value="Maniko Zulfa">Maniko Zulfa</option>
                  <option value="Marviandi">Marviandi</option>
                  <option value="Yon Hendri">Yon Hendri</option>
                  <option value="Ir. Edinur">Ir. Edinur</option>
                  <option value="Syafriadi">Syafriadi</option>
                  <option value="Fani Fajriani, S.Tr.Stat.">
                    Fani Fajriani, S.Tr.Stat.
                  </option>
                  <option value="Hafizur Rahman, S.Tr.Stat.">
                    Hafizur Rahman, S.Tr.Stat.
                  </option>
                  <option value="Rahul Adha, A.Md.Stat.">
                    Rahul Adha, A.Md.Stat.
                  </option>
                  <option value="Ilham Nasrullah, A.Md.Stat.">
                    Ilham Nasrullah, A.Md.Stat.
                  </option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label font-bold">Divisi</label>
              <div className="form-control">
                <label className="label font-bold">Divisi</label>
                <div className="text-xl">
                  <select
                    className="hover:cursor-pointer text-sm block appearance-none w-full border border-abutua text-hitam py-3 px-4  pr-8 rounded-lg leading-tight focus:outline-none focus:border-birumuda focus:-border-1 ring-slate-300"
                    id="divisi"
                    name="divisi"
                    value={divisi}
                    onChange={(e) => setDivisi(e.target.value)}
                  >
                    <option value="">Pilih Divisi</option>
                    <option value="Neraca Wilayah dan Diseminasi">
                      Neraca Wilayah dan Diseminasi
                    </option>
                    <option value="Pengolahan dan IT">Pengolahan dan IT</option>
                    <option value="Statistik Ekonomi">Statistik Ekonomi</option>
                    <option value="Sosial">Sosial</option>
                    <option value="Bagian Umum">Bagian Umum</option>
                    <option value="Perencanaan Administrasi dan Keuangan">
                      Perencanaan Administrasi dan Keuangan
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label font-bold">atk</label>
              <input
                type="text"
                value={atk}
                onChange={(e) => setAtk(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama ATK"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Jumlah</label>
              <input
                type="text"
                value={jumlah}
                onChange={(e) => setJumlah(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Jumlah"
              />
            </div>

            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
