<template>
  <div className="aboutus">
    <h2 id="abs">About Us</h2>
    <h3>
      Our product is basically a social media application but it looks a better
      way different than other social media applications
    </h3>
    <h4>what are Mary-j Tokens ?</h4>
    <p>
      Mary-J tokens are usefull to allow users to buy real e-cards like PayPal
      card we appreciate your time spent on connecting to our application, for
      this reason we allow users to gain 5 tokens per 10 minutes
    </p>
    <h2>development team:</h2>
    <h4 id="devName">
      <a id="namedevlop" href="https://github.com/achref-bououn"
        >*Achref bouaoun*</a
      >
      <br />
      <a id="namedevlop" href="https://github.com/Slim-Kasraoui"
        >*Slim kasraoui*</a
      >
      <br />
      <a id="namedevlop" href="https://github.com/malek-chebil"
        >*Malek Chebil*</a
      >
      <br />
      <a id="namedevlop" href="https://github.com/WalaNour">*Wala nour*</a>
      <br />
    </h4>
    <h3 id="contact">FeedBack</h3>
    <input
      id="Fid"
      type="text"
      placeholder="send us a feedback or find support"
      onChange="{this.handleCange}"
      required
    />
    <button id="feedback" onClick="{this.handleClick}">
      send
    </button>
  </div>
</template>

<script>
export default {
    name : 'AboutUs'
}
</script>
