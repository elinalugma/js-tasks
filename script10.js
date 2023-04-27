function removeDuplicatedLetter(str){
  let uniq = '';
  for (const duplicate of str){
    if (uniq.includes(duplicate) == false){
      uniq += duplicate;
    }
  }
  return uniq;
}
console.log(removeDuplicatedLetter("rakhiiiimelinaaaaa"));