// NOTE: Presentational Component
const User = ({ user }) => {
  const {
    picture: { large },
  } = user;

  return (
    <div className="w-full p-4 shadow-xl card bg-base-100">
      <figure>
        <img src={large} alt="user" className="rounded-full" />
      </figure>
    </div>
  );
};

export default User;
