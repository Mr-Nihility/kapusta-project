import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserInfo.module.css';
import { logOut } from 'redux/auth/auth-operations';
import { getIsLogged, getUserEmail } from 'redux/auth/auth-selectors';
import { ConfirmationModal } from 'components/ConfirmationModal/ConfirmationModal';
//---------------------------------------------------//

export default function UserInfo() {
  const dispath = useDispatch();
  const isLogged = useSelector(getIsLogged);
  const email = useSelector(getUserEmail);

  const handlerLogOut = () => {
    dispath(logOut());
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    isLogged && (
      <div className={styles.wrapper}>
        <Avatar
          size={32}
          // fgColor={'#52555F'}
          round={true}
          name={email}
        />
        <p className={styles.text}>{email}</p>

        <button className={styles.btn} type="button" onClick={handleOpenModal}>
          Exit
        </button>
        {isModalOpen && (
          <ConfirmationModal
            onSubmit={handlerLogOut}
            onClose={handleCloseModal}
            title="Do you really want to leave?"
          />
        )}
      </div>
    )
  );
}
