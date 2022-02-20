const json_file = JSON.parse(file)
console.log(json_file.results)

/*class Node {
    constructor(name,data) {
        this.name = name
        this.data = data
        this.left = null // this.next
        this.right = null // this.next2
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root
    }
    
    // metodos...
    insert(name, data) {
        let node = new Node(name, data)
        
        if(this.root == null) {
            this.root = node
        } else {
            let current = this.root
            
            // node = new Node(87)
            
            // Explorar el árbol
            while(true) {
            
                // current.right = N(84) && 84 < 87
                if(current.right != null && current.name < node.name) {
                    current = current.right
                } else if (current.left != null && current.name > node.name) {
                    current = current.left
                } else {
                    break
                }
                
                //if(current.right == null || current.left == null) {
                //    break
                //}
            }


            // Llegamos a nuestro destino y asignamos
            if(current.right == null && current.name < node.name) {
                current.right = node
            } else if (current.left == null && current.name > node.name) {
                current.left = node
            }
            
            // this.root.data < node.data
            // true:
            //  right = node 
            // false:
            //  left = node  
            
        }
    } 
    
    search(nombre) {
        if(this.root.name.slice(1,nombre.length) == nombre) {
            return this.root
        } else {
            let current = this.root

            while(true) {
                // current = N(14)
              
                if(current.right != null && current.name.slice(0,nombre.length) < nombre) {
                    current = current.right
                } else if (current.left != null && current.name.slice(0,nombre.length) > nombre) {
                    current = current.left
                } else {
                    break
                }
            }
        
            return current
        }
    }
  
    search_multiple(root, nombre) {
      let results = []
        if(root.name.slice(0,nombre.length) == nombre) {
            return root
        } else {
            let current = root

            while(true) {
                // current = N(14) 
                
                if(current.name.slice(0,nombre.length) == nombre) {
                  results.push(current)
                }
              
                if(current.right != null && current.name.slice(0,nombre.length) < nombre) {
                    current = current.right
                } else if (current.left != null && current.name.slice(0,nombre.length) > nombre) {
                    current = current.left
                } else {
                    break
                }
            }
        
            return this.search_multiple(current)
        }
    }
    
}

let bn = new BinaryTree()
for(let i = 0; i<json_file.results.length; i++) {
  let personaje = json_file.results[i]
  bn.insert(personaje.name, personaje)
}

console.log(bn)*/


function buscar_personaje(nombre) {
  for(let i = 0; i<json_file.results.length; i++) {
    if(json_file.results[i].name == nombre) {
      return json_file.results[i]
    }
  }
}

/*
function buscar_personajes(nombre) {
  let resultados = []
  for(let i = 0; i<json_file.results.length; i++) {
    
    if(json_file.results[i].name.slice(0,nombre.length) == nombre) {
      resultados.push(json_file.results[i])
    }
    
  }
  return resultados
}
*/


function hacer_busqueda() {
  let nombre = document.getElementById("nombre_personaje").value
  let personaje = buscar_personaje(nombre)
  
  console.log(nombre)
  
  let html = `<div>Nombre: ${personaje.name}</div>
              <div>Genero: ${personaje.gender}</div>
              <div>Altura: ${personaje.height} cm.</div>
              <div>Peso: ${personaje.mass} kg.</div>
              <div>Color de pelo: ${personaje.hair_color}</div>
              <div>Color de ojos: ${personaje.eye_color}</div>
              <div>Color de piel: ${personaje.skin_color}</div>`
              
  
  document.getElementById("resultado").innerHTML = html
}

/*
function hacer_busquedas() {
  let nombre = document.getElementById("nombre_personaje").value
  let personajes = buscar_personajes(nombre)
  let html = ""
  
  console.log(nombre)
  
  for(let i = 0; i<personajes.length; i++) {
      html += `<div>Nombre: ${personajes[i].name}</div>
           <div>Color de pelo: ${personajes[i].hair_color}</div>
           <div>Genero: ${personajes[i].gender}</div>`
  }
  document.getElementById("resultado").innerHTML = html
}


function hacer_busqueda_bn() {
  let nombre = document.getElementById("nombre_personaje").value
  let personaje = bn.search(nombre).data
    
  let html = `<div>(Con Arbol binario)</div>
              <div>Nombre: ${personaje.name}</div>
              <div>Color de pelo: ${personaje.hair_color}</div>
              <div>Genero: ${personaje.gender}</div>`
  
  document.getElementById("resultado").innerHTML = html
  
}


function hacer_busquedas_bn() {
  let nombre = document.getElementById("nombre_personaje").value
  
  let personajes = []
  
  for(let i = 0; i<nombre.length;i++) {
    let personaje = bn.search(nombre.slice(0,i))

    if(!personajes.includes(personaje)) {
  
      personajes.push( bn.search(nombre.slice(0,i)) )      
    }
    
  }
  
    
  let html = "<div>Busquedas hechas con BT</div>"
  console.log(nombre)
  
  for(let i = 0; i<personajes.length; i++) {
      html += `<div>Nombre: ${personajes[i].name}</div>
           <div>Color de pelo: ${personajes[i].hair_color}</div>
           <div>Genero: ${personajes[i].gender}</div>`
  }
  document.getElementById("resultado").innerHTML = html
  
}
*/

let result = JSON.parse(poke_file)
console.log(result)


console.log("buscar_personajes()", buscar_personajes("l"))