<template>
  <div class="cover">
    <div class="cover-content">
      <v-row>
        <v-col cols="12">
          <div class="cover-overlay"></div>
          <h1>We are Saffy</h1>
          <h3>The world first biological solution for water purification.</h3>

        </v-col>
      </v-row>
    </div>
    <!-- /cover-content -->
  </div>
</template>

<script>
export default {
  name: "CoverSection",
  data() {
    return {
      slides: [
        {
          heading: "We are Saffy",
          text: "The world first biological solution for water purification",
          img: "/img/slides/bg-1.svg",
        },
      ],
    };
  },
};
</script>
<style>
.cover {
  background: #fff url(/img/bg-main.svg) no-repeat center bottom;
  /* background-size: cover; */
  /* background-attachment: fixed; */
  width: 100%;
  height: 100%;
  min-height: 720px;
  display: table;
  position: relative;
  text-align: center;
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.1;
}

.cover-content {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  -webkit-transform: translateY(-2.1rem);
  -ms-transform: translateY(-2.1rem);
  transform: translateY(-2.1rem);
}
.cover-content h1 {
  color: #ffffff;
  font-family: "poppins-medium", sans-serif;
  font-size: 8.4rem;
  line-height: 1.071;
  max-width: 900px;
  margin-top: 0;
  margin-bottom: 0.6rem;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.cover-content h3 {
  color: #b77de3;
  font-family: "poppins-bold", sans-serif;
  font-size: 2.3rem;
  line-height: 1.565;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.cover-content .cover-position {
  font-family: "lora-regular", serif;
  font-size: 1.9rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #ffffff;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.cover-content .cover-position span {
  display: inline-block;
}
.cover-content .cover-position span::after {
  content: "|";
  text-align: center;
  display: inline-block;
  padding: 0 8px 0 14px;
  color: rgba(255, 255, 255, 0.3);
}
.cover-content .cover-position span:first-child::before {
  content: "|";
  text-align: center;
  display: inline-block;
  padding: 0 14px 0 8px;
  color: rgba(255, 255, 255, 0.3);
}
.cover-content .button {
  color: #ffffff !important;
  border-color: rgba(255, 255, 255, 0.3);
  height: 6rem !important;
  line-height: 5.4rem !important;
  padding: 0 3.5rem 0 3rem !important;
  margin-top: 0.6rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.cover-content .button:hover,
.cover-content .button:focus {
  border-color: #b77de3;
}
.cover-content .button::after {
  display: inline-block;
  content: "\f107";
  font-family: fontAwesome;
  font-size: 1.6rem;
  line-height: inherit;
  text-align: center;
  position: relative;
  left: 1.2rem;
}

.cover-social {
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 7.2rem;
  font-size: 3.3rem;
  margin: 0;
  padding: 0;
}
.cover-social li {
  display: inline-block;
  margin: 0 20px;
  padding: 0;
}
.cover-social li a,
.cover-social li a:visited {
  color: #ffffff;
}
.cover-social li a:hover,
.cover-social li a:focus {
  color: #b77de3;
}

/**
 * responsive:
 * cover
 * ---------------------------------------------------------------
 */
@media only screen and (max-width: 1024px) {
  .cover-content h1 {
    font-size: 7.6rem;
  }
  .cover-social {
    font-size: 3rem;
  }
  .cover-social li {
    margin: 0 15px;
  }
}
@media only screen and (max-width: 768px) {
  cover {
    min-height: 660px;
  }
  .cover-content h1 {
    font-size: 5.2rem;
  }
  .cover-content h5 {
    font-size: 1.8rem;
  }
  .cover-content .cover-position {
    font-size: 1.3rem;
  }
  .cover-social {
    font-size: 2.5rem;
  }
  .cover-social li {
    margin: 0 10px;
  }
}
@media only screen and (max-width: 600px) {
  .cover {
    min-height: 600px;
  }
  .cover-content h1 {
    font-size: 4.6rem;
    margin-bottom: 0.6rem;
  }
  .cover-content h5 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.2rem;
  }
  .cover-content .cover-position {
    font-size: 1.2rem;
  }
  .cover-content .cover-position span {
    padding: 0 0.6rem;
  }
  .cover-content .cover-position span::before,
  .cover-content .cover-position span::after {
    display: none !important;
  }
  .cover-social {
    font-size: 2.4rem;
  }
}
</style>
