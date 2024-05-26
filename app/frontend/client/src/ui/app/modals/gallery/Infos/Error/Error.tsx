import { Button, Modal } from "flowbite-react";

export default function ErrorModal({ modal, setModal, handleCloseModal }) {
  return (
    <>
      <Modal
        show={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
      >
        <Modal.Header>Ocorreu um erro!</Modal.Header>
        <Modal.Body>
          <p>{modal.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} className="bg-success">
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
