const WelcomeCard = ({ name, subtitle, avatar }) => {
  return (
    <div className="flex items-center gap-4 bg-background-dark text-color-dark p-4">
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Text Content */}
      <div>
        <h2 className="text-lg font-semibold">Welcome! {name}</h2>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
