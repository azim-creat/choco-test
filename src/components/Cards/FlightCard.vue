<template>
  <div class="flight_cart">
    <div class="flight_cart__main">
      <div class="flight_cart__main__header">
        <div class="flight_cart__main__header__logo">
          <img
            class="flight_cart__logo"
            :src="`https://aviata.kz/static/airline-logos/80x80/${flight.validating_carrier}.png`"
            :alt="`airline logo ${flight.validating_carrier}`"
          />
          <span class="flight_cart__airline_name">{{
            flight.itineraries[0][0].carrier_name
          }}</span>
        </div>

        <div class="flight_cart__main__header__fligt_info">
          <div class="flight_cart__main__header__date flight_cart__main__header__dep_date">
            <div class="date__date">25 ноя, вс</div>
            <div class="date__time">23:25</div>
          </div>
          <div class="flight_cart__main__header__way">
            <div class="flight_cart__main__header__way__header">
              <span class="dep_airoport airoport">ALA</span>
              <span class="way_long">4 ч 20 м</span>
              <span class="ariv_airoport airoport">TSE</span>
            </div>
            <div class="flight_cart__main__header__way__points">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="flight_cart__main__header__way__points__name">
              <span>через Шымкент, 1 ч 50 м</span>
            </div>
          </div>
          <div class="flight_cart__main__header__date flight_cart__main__header__ariv_data">
            <div class="date__date">25 ноя, вс <span>+1</span></div>
            <div class="date__time">23:25</div>
          </div>
        </div>
      </div>
      <div class="flight_cart__main__footer">
        <div class="link_btn">Детали перелета</div>
        <div class="link_btn">Условия тарифа</div>
        <div class="un_refundable" v-if="!flight.refundable">
          <img :src="require('@/assets/images/no_refund.svg')" alt="" class="header__logo">
          <span>невозвратный</span>
        </div>
      </div>
    </div>
    <div class="flight_cart__secondary">
      <div class="flight_cart__price">{{flight.price}} {{flight.currency}}</div>
      <div class="flight_cart__btn">Выбрать</div>

      <div class="flight_cart__info_title">Цена за всех пассажирова</div>
      <div class="flight_cart__secondary__footer">
        <div class="flight_cart__secondary__footer__info">Нет багажа</div>
        <div class="flight_cart__secondary__footer__btn">+ Добавить багаж</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Checkbox from "@/components/Checkbox/Checkbox.vue";

export default {
  name: "FlightCard",
  props: {
    flight: Object,
  },
  components: {
    // Checkbox,
  },
  methods: {},
};
</script>

<style lang="scss">
.flight_cart {
  border-radius: 4px;
  background: $card_color;
  @include card_shadow;
  display: flex;
  margin-bottom: 10px;
  overflow: hidden;
  &__main {
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    flex-basis: 9rem;
    padding: 15px;
    padding-left: 30px;
    &__header__logo {
      display: flex;
      align-items: center;
      .flight_cart__logo {
        height: 20px;
        margin-right: 10px;
      }
      .flight_cart__airline_name {
        font-size: 14px;
        font-weight: bold;
        color: $black;
      }
    }
    
  }
  &__secondary {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 5rem;
    background: $card_color_secondary;
    padding: 15px;
  }
}

@media (max-width: 740px) {
  .flight_cart{
    flex-direction: column;
    align-items: flex-start;
    &__main {
      padding: 15px;
      padding-left: 30px;
      width: calc(100%  - 45px);
    }
    &__secondary {
      padding: 15px;
      padding-left: 30px;
      width: calc(100%  - 45px);

    }
  }
}

.flight_cart__main__header {
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
}
@media (max-width: 880px) {
  .flight_cart__main__header{
    flex-direction: column;
    align-items: flex-start;
  }
}


.flight_cart__main__footer {
  flex: 0;
  display: flex;
  align-items: center;
}

.flight_cart__main__header__date{
  .date__date{
    color: $black;
    font-size: 14px;
    span{
      color: $red;
      font-size: 10px;
      font-weight: 400;
    }
  }
  .date__time{
    font-size: 24px;
    color: $black;
    font-weight: bold;
    padding-top: 5px;
  }
}
.flight_cart__main__header__fligt_info {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}

.flight_cart__main__header__way {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
}
.flight_cart__main__header__way__header {
    display: flex;
    justify-content: space-between;
    .airoport{
      font-size: 10px;
      color: $light_gray;
    }
    .way_long{
      font-size: 12px;
      color: $black;

    }
}
.flight_cart__main__header__way__points{
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 5px 0;
  &:before{
      z-index: 0;
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      width: 100%;
      background: $light_gray;
      top: 50%;
      transform: translateY(-50%);
    }
  span{
    width: 5px;
    height: 5px;
    border: 1px solid $light_gray;
    display: block;
    border-radius: 4px;
    background: #fff;
    z-index: 1;
    
  }
}
.flight_cart__main__header__way__points__name{
  color: $orange;
  font-size: 12px
}

.flight_cart__secondary{

}

.flight_cart__price{
  font-family: "Arial", sans-serif;
  font-size: 24px;
  text-align: center;
}
.flight_cart__btn {
    color: #fff;
    background: $green;
    border-radius: 4px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    margin: 10px 0;
    cursor: pointer;
    &:hover{
      background: $green_hover;
    }
}

.link_btn {
    display: inline;
    font-size: 12px;
    color: #3F51B5;
    border-bottom: 1px #3F51B5 dashed;
    cursor: pointer;
    margin-right: 20px;
    &:hover{
      opacity: .8;
      border-bottom: 1px #3F51B5 solid;
    }
}
.un_refundable{
  color: $gray;
  display: flex;
  font-size: 12px;
  align-items: center;
  user-select: none;
  img{
    height: 15px;
    padding-right: 5px;
  }
}

.flight_cart__secondary__footer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
}

.flight_cart__secondary__footer__btn {
    font-weight: 600;
    font-size: 14px;
    color: $secondaru_btn_text_color;
    background: $secondaru_btn_bg_color;
    border-radius: 4px;
    padding: 5px 10px;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    &:hover{
      background: $secondaru_btn_bg_color_hover;
    }
}

.flight_cart__secondary__footer__info{
  color: $black;
  font-size: 12px;
  white-space: nowrap;
  margin-right: 5px;
}
.flight_cart__info_title {
    font-size: 12px;
    color: $gray;
    text-align: center;
}


</style>
