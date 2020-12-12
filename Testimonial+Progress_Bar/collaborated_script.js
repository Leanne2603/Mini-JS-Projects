const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const progressContainer = document.querySelector('.progress-container')
const circles = document.querySelectorAll(".circle")

// Dynamically create the circles based off how many testimonials we have
// On next click, we need to to go the next testimonial
window.addEventListener('load', (event) => {
  createDivs()
});

const createDivs = function () {
  let content = 1
  for (let i = 0; i < testimonials.length; i++) {
    const circleDiv = document.createElement('div')
    circleDiv.classList.add('circle')
    circleDiv.textContent = content
    if (i === 0) {
      circleDiv.classList.add('active')
    }
    progressContainer.appendChild(circleDiv)
    content = content + 1
  }
}

let currentActive = 1

next.addEventListener('click', () => {

  updateTestimonial()
  console.log(currentActive)

  currentActive++
  if (currentActive > testimonials.length) {
    currentActive = testimonials.length
  }

  update()
  console.log(circles)
})

prev.addEventListener('click', () => {
  // updateTestimonialBack()
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

// On page load we want to create a div equal to the testimonials.length
// div.classList.add('circle')
// progress.container.appendChild(circle)



function update() {
  const circles = document.querySelectorAll('.circle')
  console.log(circles)
  circles.forEach((circle, idx) => {
    if (idx <= currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  console.log(currentActive)
  currentActive++
  if (currentActive > testimonials.length - 1) {
    currentActive = 0
  }

  const actives = document.querySelectorAll('.active')
  console.log(actives)
  console.log(testimonials.length)

  progress.style.width = (actives.length - 1) / (testimonials.length - 1) * 100 + '%'
  // if (actives.length === testimonials.length) {
  //   progress.style.width = "0%"
  // }

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }

}

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://randomuser.me/api/portraits/women/46.jpg',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  userImage.src = photo
  testimonial.innerHTML = text
  username.innerHTML = name
  role.innerHTML = position


  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

// function updateTestimonialBack() {
//   const { name, position, photo, text } = testimonials[idx]

//   userImage.src = photo
//   testimonial.innerHTML = text
//   username.innerHTML = name
//   role.innerHTML = position

//   idx--

//   if (idx < 1) {
//     idx = 0
//   }
// }

function abc() {
  document.body.style.backgroundColor = "red"
}
setInterval(update, 2000);
setInterval(updateTestimonial, 2000);
// setInterval(abc, 10000)
