const WelcomeCard = ({ name, subtitle = "Glad to see you back!", avatar }) => {
  const displayName = name && name.trim() ? name : "Guest";

  return (
    <div className="flex items-center gap-4 text-color-dark p-4 ms-5">
      {/* Text Content */}
      <div>
        <h2 className="text-lg">Welcome {displayName}</h2>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
