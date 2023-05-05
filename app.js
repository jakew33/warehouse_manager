const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

let allPackages = packages

function drawPackages(){
  let template = ''
  allPackages.forEach(package => template += `
    <div class="col-4"
      <p>${package.to}</p>
      <p>${package.trackingNumber}</p>
    </div>
  `)
  // console.log('this is my package template', template)
  let packageElm = document.getElementById('packageList')
  // console.log('this is my package element', packageElm);
  // @ts-ignore
  packageElm.innerHTML = template
}
drawPackages()





function sortHeavy() {
  allPackages = allPackages.filter(package => package.weight >= 5)
  console.log('these are my heavy packages',allPackages);
  drawPackages()
}

function sortIsFragile() {
  allPackages = allPackages.filter(p => p.isFragile == true)
  console.log(allPackages);
  drawPackages()
}

// function filterPriorityLevelFree(){
  //   let packageType = packages.filter(p=> p.priorityLevel == 'free')
  //   console.log(packageType);
  // }
  

  
  //none of this is right
function filterPriorityLevel(priorityLevel){
  let packageType = packages.filter(p=> p.priorityLevel == priorityLevel)
  console.log(packageType);
    drawPackages()
}

function filterPriorityLevel(priorityLevel){
  let packageType = packages.filter(p=> p.priorityLevel == priorityLevel)
  console.log(packageType);
    drawPackages()
}

function filterTo(to){
  let packageType = packages.filter(p=> p.priorityLevel == priorityLevel)
  console.log(packageType);
    drawPackages()
}



  
  

/* function sortIsFree() {
  let freePackages = packages.filter(p => p.isFree == true)
  console.log(freePackages);
}

function sortIsStandard() {
  let standardPackages = packages.filter(p => p.isStandard == true)
  console.log(standardPackages);
}

function sortIsExpress() {
  let expressPackages = packages.filter(p => p.isExpress == true)
  console.log(expressPackages);
} */


/* function sortPackages(priorityLevel){
  if (package == priorityLevel.free){
    return
  }
} */



