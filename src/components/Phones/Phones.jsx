import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
  return (
    <div>
      <h1 className="text-4xl text-center">this phones container</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-y-5">
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
