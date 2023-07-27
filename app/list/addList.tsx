"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddList() {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState("");
  const [atk, setAtk] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [Id, setId] = useState();
  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);
    await fetch(`http://localhost:5000/list`, {
      method: "POST",
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
    setAtk("");
    setNama("");
    setJumlah("");
    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }
  return (
    <div>
      <button className="btn bg-slate-500" onClick={handleChange}>
        Add List
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New List</h3>
          <form onSubmit={handleSubmit}>
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
              <label className="label font-bold">ATK</label>
              <input
                type="text"
                value={atk}
                onChange={(e) => setAtk(e.target.value)}
                className="input w-full input-bordered"
                placeholder="ATK"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Jumlah</label>
              <input
                type="text"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
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
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
