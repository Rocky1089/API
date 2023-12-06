const row = document.getElementById('row')
  const baseUrl =`https://api.worldnewsapi.com/search-news?api-key=166fade0b0ff4c2d8408191b910b5ae2&text=sport.`
    fetch(baseUrl)
   .then(result => result.json())
   .then ((data) =>{
  console.log(data)
  let column;
  data.news.map((value,index) =>{
    column += `
      <div id="coo">
        <img src="${value.image}" alt="" style="width: 100%;height:190px;">
        <strong>Name:${value.title.slice(0,60)}</strong><br>
        <strong>Author:${value.author}</strong>
         <p>${value.text.slice(0,200)}</p>
         <button class="btn">Read More</button>
        </div>
    ` 
  })
  row.innerHTML = column
})