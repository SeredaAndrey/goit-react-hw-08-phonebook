import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>User</h2>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Exit
      </button>
    </>
  );
};

export default UserMenu;
