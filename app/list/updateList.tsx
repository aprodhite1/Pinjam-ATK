"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

type List = {
  id: string;
  nama: string;
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
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama"
              />
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
              <label className="label font-bold">Price</label>
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
