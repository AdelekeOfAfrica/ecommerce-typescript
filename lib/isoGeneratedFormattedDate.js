export function isoGeneratedFormattedDate(normalDate ){

    const dateObject = new Date(normalDate);
      const isoFormattedDate =dateObject.toISOString();
      return isoFormattedDate ;
}  

