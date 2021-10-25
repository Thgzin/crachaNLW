

 
 const LinksSocialMedia = {
      github: 'Thgzin',
      youtube: 'channel/UCXPM7_uRJKwMstaaTWzZ7Tg',
      facebook: 'profile.php?id=100009763480223',
      instagram: '_thiagothg',
      twitter: 'thgPOKaS'
    }

    function changeSocialMediaLinks() {
      for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

       
      }
    }

changeSocialMediaLinks()


function getGitHubProfileInfo() {
  
  /*
  let userName = document.getElementById('userName')
  let bio = document.getElementById('bio')
  let userLink = document.getElementById('userLink')
  let userPhoto = document.getElementById('userPhoto')
  */

  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response => response.json()).then(data => {userName.textContent = data.name 
    bio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfo()