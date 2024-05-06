import { Button, Modal } from "flowbite-react";
import OutgoingForm from "../../forms/Financials/pages/OutgoingForm";

export default function EditFinance({
  modal,
  setModal,
  handleCloseModal,
  financeType,
  id,
  title,
}) {
  return (
    <>
      <Modal
        className=""
        show={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
      >
        <Modal.Header>
          <h2 className="font-bold italic text-secondary text-[22px]">{title}</h2>
          </Modal.Header>
        <Modal.Body>
             {financeType === "outgoing" ? (
          <OutgoingForm id={id} />
        ) : (
          <OutgoingForm id={id} />
        )}
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button
            className="mr-2 bg-red-500"
            onClick={() => setModal({ ...modal, isOpen: false })}
          >
            Excluir finança
          </Button>
          <Button
            className="bg-primary"
            onClick={() => setModal({ ...modal, isOpen: false })}
          >
            Cancelar
            </Button>
       </Modal.Footer>
      </Modal>
    </>
  );
}
