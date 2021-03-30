const ConvertDate =(v)=>{
    var arrD = v.split('-');
    var conY = parseInt(arrD[0]) - 543;
    var re = new Date(`${conY}-${arrD[1]}-${arrD[2]}`).toLocaleDateString('th-TH',{
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
   
    return re
  }

export default ConvertDate