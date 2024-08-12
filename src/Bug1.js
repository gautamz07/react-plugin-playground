import * as React from "react";
// import { TouchableOpacity } from "react-native";
// import ReactModal from "react-modal";
import ReactModal from './TheModal/index'
import "./bug1.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isAdditionalModalOpen, setIsAdditionalModalOpen] = React.useState(
    false
  );

  function openModal() {
    setIsModalOpen(true);
  }

  function openAdditionalModal() {
    setIsAdditionalModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function closeAdditionalModal() {
    setIsAdditionalModalOpen(false);
  }

  return (
    <>
      <button className="openModalBtn" onClick={openModal}>
        Open Modal
      </button>
      <ReactModal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          content: {
            position: "unset",
            background: "transparent",
            outline: "none",
            padding: 0,
            border: "none",
            display: "flex",
            justifyContent: "center"
          }
        }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldReturnFocusAfterClose={false}
      >
        {/* <TouchableOpacity onPress={openAdditionalModal}>
          <img
            className="modalIcon"
            src="modal.png"
            alt="close_btn"
            width="20"
            height="20"
          />
        </TouchableOpacity> */}
        <div 
            className="modalIcon"
            onClick={openAdditionalModal}
          >
            BUG
        </div> 
        <div className="contentWrapper">
           MODAL
           &nbsp;
           &nbsp;
           &nbsp;
           {/* <br /> */}
           {/* <br /> */}
           <button
            onClick={openAdditionalModal}
           >
            The Bug
          </button>
        </div>
        {/* <TouchableOpacity onPress={closeModal}>
          <img
            className="closeIcon"
            src="cross-23.png"
            alt="close_btn"
            width="20"
            height="20"
          />
        </TouchableOpacity> */}
      </ReactModal>
      <ReactModal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          content: {
            position: "unset",
            background: "transparent",
            outline: "none",
            padding: 0,
            border: "none",
            display: "flex",
            justifyContent: "center"
          }
        }}
        isOpen={isAdditionalModalOpen}
        onRequestClose={closeAdditionalModal}
        shouldReturnFocusAfterClose={false}
      >
        <div className="contentWrapper">Additional Modal</div>
        {/* <TouchableOpacity onPress={closeAdditionalModal}>
          <img
            className="closeIcon"
            src="cross-23.png"
            alt="close_btn"
            width="20"
            height="20"
          />
        </TouchableOpacity> */}
      </ReactModal>
    </>
  );
}
