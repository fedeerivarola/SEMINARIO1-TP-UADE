import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SelectDatePicker (){
  const [selectedDate, setSelectedDate] = useState(null)
  
const onChange = date => {
  setSelectedDate(date);
  console.log(date.toISOString());
  localStorage.setItem("fecha_seleccionada", date.toISOString());
}

  return (
    <div>
      <DatePicker 
        selected={selectedDate}
        onChange={onChange}
        value = {selectedDate}
        dateFormat='dd/MM/yyyy'
        maxDate = {new Date()}
      />
    </div>
  )

}

export default SelectDatePicker;