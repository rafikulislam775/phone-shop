import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../../components/Phones/Card";

const PhoneDetails = () => {
  const { id } = useParams();
  const phones = useLoaderData();
  const [phone, setPhone] = useState([]);
  // console.log(id, phone);

  useEffect(() => {
    const findPhone = phones.find((phone) => phone.id === id);
    setPhone(findPhone);
    // console.log(findPhone);
  }, [id, phones]);
  return (
    <div>
      <Card phone={phone}></Card>
    </div>
  );
};

export default PhoneDetails;
