"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type List = {
  id: string;
  nama: string;
  jumlah: number;
  atk: string;
};

export default function DeleteList(List: List) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [Id, setId] = useState<string>("");
  const router = useRouter();

  async function handleDelete(ListId: string) {
    setIsMutating(true);

    await fetch(`http://localhost:5000/list/${List.id}`, {
      method: "DELETE",
    });

    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
    setId(Id);
  }

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete {List.nama} ?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(`$Id`)}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
