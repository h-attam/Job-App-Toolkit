import React from "react";
import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store);

  // 1) Sadece pozisyon değerlerinden oluşan bir dizi tanımla
  const arr = jobs.map((job) => job[name]);

  // 2) Dizide tekrar eden elemanları kaldırır
  const filtredSet = new Set(arr);

  // 3) set'in döndürdüğü nesneyi diziye çevir
  const options = Array.from(filtredSet);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name} // `id` ve `list` tutarlı olmalı
        name={name}
        list={name} // `datalist` ile ilişkilendirmek için
        required
      />
      <datalist id={name}>
        {options.length > 0 ? (
          options.map((i, index) => (
            <option key={index} value={i} />
          ))
        ) : (
          <option value="" disabled>No options available</option> // Eğer seçenek yoksa bilgilendirme
        )}
      </datalist>
    </div>
  );
};

export default AutoInput;

