export default function App() {
  
  const [user, setUser] = useState({
    name: "",
    userName: "",
    address: "",
  });

  /**
   * The handleInputChange function is a callback function that is 
   * called whenever any of the input fields change. It takes a field 
   * parameter that specifies which field has changed.
   * 
   * The handleInputChange function returns a new function that takes 
   * an event parameter, which represents the change event that occurred.
   */
  const handleInputChange = (field) => {
    return (event) => {
      setUser((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };
  };

  return (
    <>
      <input value={user.name} onChange={handleInputChange("name")} />
      <input value={user.userName} onChange={handleInputChange("userName")} />
      <input value={user.address} onChange={handleInputChange("address")} />
    </>
  );
}
