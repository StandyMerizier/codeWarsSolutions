function triangle(row) {
  while (row.length>1)
  {
    var r='';
    for (var i=0; i<row.length-1; ++i)
    {
      if (row[i]=='G' && row[i+1]=='G')
        r+='G';
      if (row[i]=='G' && row[i+1]=='R')
        r+='B';
      if (row[i]=='G' && row[i+1]=='B')
        r+='R';
      if (row[i]=='R' && row[i+1]=='G')
        r+='B';
      if (row[i]=='R' && row[i+1]=='R')
        r+='R';
      if (row[i]=='R' && row[i+1]=='B')
        r+='G';
      if (row[i]=='B' && row[i+1]=='G')
        r+='R';
      if (row[i]=='B' && row[i+1]=='B')
        r+='B';
      if (row[i]=='B' && row[i+1]=='R')
        r+='G';
    }
    row=r;
  }
  return row;
}
