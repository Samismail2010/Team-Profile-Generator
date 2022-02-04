// //create project cards section
// const generateProject = projectArr => {
//     return `
//     <div><h2>hello team</h2>
//         ${projectArr
//         .filter(({ feature }) => feature)
//         .map(({ manager, id, email, office})=> {
//             return `
//             <div class="col-4 mt-4">
//         <div class="card">
//             <div class="card-header">
//                 <h3>${manager}</h3>
//                 <h4><span class="oi" data-glyph="briefcase"></span> Manager</h4>
//             </div>
//             <div class="card-body">
//                 <p class="id">ID: ${id}</p>
//                 <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
//                 <p class="office">Office Number: ${office}</p>
//             </div>
//         </div>
//     </div>    
//     `;
//     })
//     .join('')}
//     ${projectArr
//     .filter (({ }))}
//     `
//         })}
//     `
// }

// module.exports = templateData => {
//     const {} = templateData;

//     return`
//     <!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>My Team</title>
//             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
//             <link rel="stylesheet" href="style.css">
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic.min.css" integrity="sha512-LeCmts7kEi09nKc+DwGJqDV+dNQi/W8/qb0oUSsBLzTYiBwxj0KBlAow2//jV7jwEHwSCPShRN2+IWwWcn1x7Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//         </head>
//     `
// }