import React from 'react';

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  return (
    <div>
      <h2>General Information</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={generalInfo.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}
