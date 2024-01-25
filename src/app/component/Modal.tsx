
'use client'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
interface ModalProps {
    isOpen: boolean;
    setModalOpen: (open: boolean) => void;
    onClose: () => void; 
    children:React.ReactNode
}

const CustomModal: React.FC<ModalProps> = ({isOpen , setModalOpen , children}) => {

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={() => setModalOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
               {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal

