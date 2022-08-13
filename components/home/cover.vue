<template>
 <section class="cover">

            <div class="cover-overlay"></div>
          <div class="text-content">
            <h1>SaffyWater</h1>
          <h2 class="pt-3">
            The world first biological solution for water purification.
            </h2>

          </div>

     </section>


</template>

<script>
export default {
  name: "CoverSection",
  data() {
    return {

    };
  },
};
</script>
<style>
.cover {
  background: #fff url(/img/bg-main.svg) no-repeat center bottom;
 width: 100vw;
  height: 100vh;
  min-height: 100vh;
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

.cover {
  /* display: table-cell;
  vertical-align: middle;
  text-align: center;
  -webkit-transform: translateY(-2.1rem);
  -ms-transform: translateY(-2.1rem);
  transform: translateY(-2.1rem); */
}
.cover  .text-content{
       height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
   justify-content: flex-end;
}

.cover h1 {

  letter-spacing: 0.2rem;

}
.cover h3 {

  text-transform: capitalize;
  letter-spacing: 0.15rem;

}


/**
 * responsive:
 * cover
 * ---------------------------------------------------------------
 */
/* @media only screen and (max-width: 1024px) {
  .cover h1 {
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
  .cover h1 {
    font-size: 5.2rem;
  }
  .cover h5 {
    font-size: 1.8rem;
  }
  .cover .cover-position {
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
  .cover h1 {
    font-size: 4.6rem;
    margin-bottom: 0.6rem;
  }
  .cover h5 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.2rem;
  }
  .cover .cover-position {
    font-size: 1.2rem;
  }
  .cover .cover-position span {
    padding: 0 0.6rem;
  }
  .cover .cover-position span::before,
  .cover .cover-position span::after {
    display: none !important;
  }
  .cover-social {
    font-size: 2.4rem;
  }
} */
</style>
