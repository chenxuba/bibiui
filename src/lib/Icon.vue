<template>
  <i class="bb-icon" v-if="!isImageFlag" :class="iconName" :style="{color:color,fontSize:size,cursor:pointer?'pointer':'default'}" />
  <i class="bb-icon" :style="{fontSize:size,cursor:pointer?'pointer':'default'}">
    <img :src="name" v-if="isImageFlag" alt="" class="bb-icon__image">
  </i>
</template>

<script lang='ts'>
import { computed } from "vue"
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      // 字体颜色
      type: String,
      default: "#000"
    },
    size: {
      type: String,
      default: "32px"
    },
    pointer: {
      // 默认开启鼠标手状
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    // 判断是否是图片链接
    function isImage(name) {
      return name ? name.indexOf("/") !== -1 : false
    }
    const isImageFlag = isImage(props.name)

    const iconName = computed(() => {
      return `bb-icon-${props.name}`
    })
    return { iconName, isImageFlag }
  }
}
</script>

<style lang="scss" scoped>
.bb-icon {
  font-size: 32px;
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
}
.bb-icon__image {
  width: 1em;
  height: 1em;
  object-fit: contain;
}

@font-face {
  font-family: "bb-icon";
  src: url("//at.alicdn.com/t/font_2355356_1u5a8mw8hce.eot?t=1611903002264"); /* IE9 */
  src: url("//at.alicdn.com/t/font_2355356_1u5a8mw8hce.eot?t=1611903002264#iefix") format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABUwAAsAAAAAJqQAABTgAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCHZgq3WKw5ATYCJAOBHAtQAAQgBYRhB4M/G+wfRUbOJWt9sv8vCdoYIfJ1YrU5StOgKFNTxpyS1BYJvj9wzF142aTNFDaZhUcsf1iEu5Qfai5xPLX5K20e2wylhH/6/dp58v++FcStiWgiQahMpxESJTOERCKqNPE7Q4ikHZ7fZo//TaqsiWAlZlHGcCZYcQpWgNnoAiNXurVe4CpZmQvj5qV5qbtguwoIcndfvzDj5hkGmiUQY+BNtlWRnj1LpucMWTUhYUWdD3zhmwSaEaN9TSSEk/fVBUCbpw/8t2rOufB9NkCoqoiEap1vDngRbzrzW00yjB4WSBlze7LX3RYyKC7iJPF/FEDA/M+ltilxxhLL31WY0fNz8v8c/ksOcsU0pXR4zSjlFElOET4P7JJiroQpkGvdOjU5NgpQ6PlJPWGmaXcde0q015sN4hgu7UFNkjdibE8zTCI6salhQEqtbmby+HEg8DKbgTIrT5wJApXCt5BGcMSMIRNGyImEIrNXgAPy/s13iQCwogoyzU0RNxtMfgv2eGvOOmyXD0Z9HHA/FDjQDTxsZyJEuxJ3EzrFknovAFCff48eAt8yZCN3iRUoUUaqQZN+kwXHu7p1a7Z8skIV2WPCl9N8oI0VI2xt1U52GyQXwfLmgQYtWjUzLMeLxBKCpJS0jFw58uQrUKRQsRKlypSrUKlKtSaNatS+/sOrg2kgK50BmAdnWiFwjKEBAmiBbAztjDsANEPZAAbKAbCQCMBBYgAP5QNEUAFADJUAJKAygABVACQhCUAKkgKkoSqADFQNkAvVAORAtQB5UB1APlQPUAA1ABRBTQCFUA9AMdQLUAIdBiiFjgCUQUcByqFjABWQHKAS6gOogvoBqqEJliZgJgGgEX/BLDWE4QBLLTBcYKkHhgdVqAPQdh5kHcAeIFxIb5DlmFEYFhB2D6JjxUufttsQxfIzFDG+Uu3UkbcCphGdScmj5Xe6BEo387kUSe0KLOuTmaXBgkOGWiT3dXA+0W5Z92zsQCQf3BCCo6L3m+AtM702nGW5LiP0wSlyqNncfP7ixAYSV4gw3I4wXTtiBucV6bkS/yFbBLfilZRMrXc7ZZTN7ParoCar5VZsIeKSRJCm8VJWCwsL1BSFSIaAP0yBYUgJBWgCO+Q/htyo/9dK/jZgHcO/jl8VXnvXa5IIkflKmranC14mjBZB4gfOQ/+x+8he3/RtfN2NL10zjV/HoXVa7u7tAamlaG4j6psPQ68CatwqQsdoDCEtKUr4oC/l+nrn7qmsrcvdTShJmDRXLhqpj5nhG0G9LrffGV2+zClnG6wNpJCSKSjxg45K7mE/VHzcBUSP+kOgKl2BV4s0CJNXoNcl+/lVI03NuN7soEIh9HQQGIgdqqpq9iPpiakdB1/mJRy8ixWNPY9TV5o7d39z11Tfpws205hvzCjVV2acKzap9K0tPOjYwRD+VW+8H9xoKdUJ3r0eaJvqPP2HAGWp5klx38hQUkv7jEo7TfqP07JB7d6OXmnYO8Pa0T0IgSS8EJdUdS3s5m5+vf29x4b6pqOw0L3eB6Aja8OSWluzIWBa/mEnRc3gqKgxZpPPc4KoEKtC9CiQhNrTZSYdbsGwPuIuHkDT/MCwbvoTMMsjlmiBpCtwTLIgsiWpeAN7QhYqzkOEMrmJUsqvdgFIKbuuQf5j4EYrYVzqmBlTuD+gN7Ymgu49YKRWoCWYqYz2M/ufhUp38f+PAz9N6oWgtybzXqdmbdIsPHIf+w+dBwMqaZLjb4iuUrzyQASz3MbET3ugoArS/X5eK3h9g+Im715nFN7Znq4IwGB7HO0jPqJLqGmT8xV7Mq3J+maNqt0yDQ+8R913eCVVuUXKTSPIMEHqdTwNx821AbeweNyExyjJOExj+S7sOTDqO0dbAbZ5rJoT0ShiSrozTk5KeBzmNJzYQsNyI3vW2Dv0pOeHpm8nf+jFwl/9spLp8t+znVSBXuVQ7Z7A1zBDSljaffu7+8370rXxq+WXnZJXcavucSbh0dg0zO4JQhzMJsOt+iZ9Nb/V15xMopE1WEdzIincUFfShk54qEnnktd+eJgZNmqr2M0B1iScK995q3axpuD8bWNN0NyZjLBoVRBVTJOqZqjhqdPJpta7IOF6gWpOt8YPAgy6BILTyYxRZTNgF8JM4wxr2miyadBh+6BTkVARSWzTjFXVvASbYSct54IcM4ZQ8XJnoqBrUF/pTwjneuGGXTerVZyctk5x+mEtPxblG6ptg3lhz44lS3+4uvhOx0nn1K001vXtemY50nbHGHsD5/VVqvCWA5v4r7btI8GTK9+sguA6ZBvYnk+4w8olrys86vxD/eMBxwIWdtLGflOlLACuTrbf2Arrf+DEz3GchgvdalHDVmBvGsvZ+6N33puOe0Pn6ltnhPfX3d0hZ+W1TF+m6zgBBQf8u50Qzto8MJOyDa4W0SioN4UxyJelpb4q9XSu64M/rQ6qvaBLV+ME4NLcVRMkeK0VJObWLBPmdoUl1nYrQyXh0kIeX2rhLSb2H3a9IFScXu/RLAdX7q2NnPvIi2mshwK5td4wiCNWTipr1SHFAeGTgdOGTBr92DkP6BV03qUHVGmC/XRIL4ss7FbqCxCAR1lQNcanCbAmQ+b3LJpKMb2h3vm2F424J7e9fUm5DubL8Pfk5AcCSsmuTridLLrcAyoR3QAhxdiAYuTbAx51mB+ACBfd/nV7K+WqCZ7ef+GYyrPu7am1U7EcdkQdR6O42+S47/6VFV4hMuWQH7gclsUP7NpJHQ0sF7Scpbt5XHKO7F46gg64N5CcGnb6DrAxVXcbl0SmejhIreuu7iezkoRisb+xEOQgJVJSuzZ0NIkpkirPpJQxI0WeVW8RQx/J+ffTHrHOwEkmvRB+lyRwrYBzqgrFe0f2Hiuf+0omSsl6nqoXnoi62gkQvD5CEyK441qvuz2qrGNaNjA2BBwe5LsqlBR6kRsYaMqUWsdCFbMtQtLnxhfnq792vOE2P58Lw7gQgStowkr5HwQzbOlovsrQKzcHFN8PQG6op0AvVsfWN/V3uC7drNLc5XI65XPKnXZ9iWDu7n333h0MHWIr71qqXsnLu0dPuLtjGYYM7OV2oiERSykAOux+G/79d/g22d9/P1nqCqizlifh1VUY1pMdgQV70PLeXow0xlwQdMRQYwVq3zXCDjo5NT15F7NKWCPuYJNTohJ/F0Z6nn88fxJJWOnnL5QXZsxNRkQYGqZ9kog+a9tTAfkf08CrT+oaJVZk0Ja/wECoL5dT6g24k1CGjdAFBFfedP5ld6nQIZbcRQTEbnKsybBIG/l6mYAZJuJ96c3mLQxpL77CxD0KH5zGSaMakJBXY8Ds7+YKbmk84yrk+VGDmuQ8jIBYTQwiVpl3nV3dfkAXrsu8CilWAw/EAhoemp0dhAihAx5CX7VGTWPHVILty9hp7NQ2HQnVnDlTAwECWkDSt6eurdLlbcr5SL947VMKgsLFy0VBfNRUq1uUdf9tNXYaZVnKmdZFCpC6zSUXsN21ehhd4P64lRBrli4wI2yDYoyckIecMHb4pb5hTjjCVJBJF0SoW7e2JpTD5OrPWOCzmvjLhjXi6gU2WEAcC4kEbley7t4VbJeoxrDrPmJbsg6GuNsxeLzmlFx3GjYD0LVvbJG667pIT3ONaey4akoreFf31EM7JcGIgLHDMIwY6KkdNUilnZL3zBeOBcN5gsCT8Nvbfr3rUsAWMufWZkvrefX6KYPog+6S3twnco2y+SL9w1jm0AldzFjbfnrN6FmqXkkLwzwq2hdPHMYQll8zNwXpwDuaJYwPrEtOKJb2+KTfEm/eEXulFAwWJianpMfFjRm4GF5KSh5mkxkt9s9Wy9D/GJq1CWI7zNtsUbpBLo+f2TPaWOTO5ORRo9FQPeD96Lfm/L3FKI8owzmuqc9xtCqak1jrhd6E3obWq/xXWht3wgstsRPrNP6LMp+MY3yi3hd6X2Y0Z3yp96o3V+tFho+WFqVJPl+as794FTAQZJfxpT0Iz87BQ6RFI8obKSlnyZhyo4nQ/ZxuLGp+fQ81AtWeOTvs1rPrMaKG1/f9/hn1Wi4I3AxISOnhMwKD/FWqzAzkMz5SkDBzxibVOyWnXz0I9c4S++DVWNcPKqR2uKL8LPus/CLsnp5leWe/ZVieDndxAa9EpDU2ptmK6BBaSvzCog4XwD8po6LQ1uhwKRWZecD6AKoQr4PnrOfAGitGiTEETDgio7k5A6LY2IrIOLisKx9ElMtPl2KF0gHnlNbLt59srFRYgumbQJQfxOCWl7bF6b2OWUzGhh5a28G8vvHA7Fvvs5Rzse7ooW8XyoFP1sxjvh813jvnWWUVuAL/tA8rCOtVuAJ3I9YHHOv5F0bz+FZ5N+orEKPwwiw0CA8uzg7DxWBGapPVZP44Ne/140cuOm3n/Zi3MU+BqytdtLyBycVsLOeStXXYUK6IiDJmLmmU3N7QEOcX19kk1DIld/fr/5yZydJmnT6do3XMbPRVw/LdZJQMjVmyGyBVWbR2oN5M3v2n3g1jBmYGsqHBUcPfG+DDxhptbmv6uQCryeROmG/GbbBRXGYGVkC4SA4n34rBCqJCXFDsHzmbbgomV1OA/aWOxfZa8CZ2CVG4bXJ+9IlK6DIfFM6cZ8F3A9Br1qsZ7nbCsiwV/67EmBt1wp3fzXePQ8SEmvzuhE/1kYLT7zzj3xb47t3uWZVuYRxa8i4V78MZzksPjoWO1Pi+kgTAYgEQmZf0NhzzzQWMSZbij/cZ0BJBqfP/1HnrfbqcMJPkvVq8Vix5i9TgRlGt96fO33fS0DzG3meIX5//R+LVAFzPoiTb41gNdGeVuv2XrDUZRdRoRqxh+rzCJfG5QF3X9isuLEPx6URT6M+ucqe9QXU2KCeW5Lux49vrUs0cFrEbPdIn28gryPoCDWoT8n6VYo1+0d/ELiILL2JWl4cg0CdWNUghs7v3HOAeS1eN4aZwY6opMulASXffaFP81rvgHx8BzFNdQeHQ4SWmOjRvplllt0QChVxVNjIyLDMgjPympv/++2hdJMi0gU9GYwj/eyOfA99Bdc/3CU3Zv4x56vux4nuzF5yxHsbUEBwwuU+sNq/KFapB/xaZKLcMhgLHbtN2pVO+tljtTKahKaYY1Xdz40Y0RpAQ/1FkXMKHdNv9CnKFWczc3IcJkbF/N0hcly42+EXfbTzo31WZy63yaKSeitJ2kXnpP1r//xxElDjUFdASyTFlRVbIN7two2WF/t3vPjyR41IW4yd3IwxYxL/d0dcUSnIcfgf7/z2h23NiXDWq/+gpKckuYLmWtpx9AzhV9wP2lss9K/wqPCrGdT48Vk/jPktJzTLS9uqIJW0zNory8j4/mjtIwNeYBfQ490g10bP5jSTzdOdEVHeadnqZ9dBaBN2t9at7LZ+JOl06/buc324ZWY93Oh+jRup76EdHgPc//esbiCZDD+GmQWGOQvcSzjyMBVmHOXx3PkLfwjX6fgbCC5LduCGzFeoIqHrdYQHojbALnqxhDhSnuroKYdcCidaX8XmkcrPFHarE5rDeYR9gre3N7tHrsSnDB3/DBh0I5Bekz0l3kHC6NZ2KyDekfdyPMvjmTVgWcEPYglfrxRBu9ekJxG/6COPUSC5YTg56UqqjjAjXI0VmvPG5Pd/ZrDjEIRFzXAp5FIeIVgW0aY1hxrSQlzGXs7XLEG3dzxPIkCF1dFDd+jLQZdBjaCgmZa7QaJ2lDH1wSsp8XXiB8pEOqhSuL97ropa7JEnshIerSHC8958u3MBRLerNSwNa0GFy34cfzHCsLlJEJqm17Zm9uYV6yZzylJcmcUaVAPEuJsw0KyL14ywWLfwwfO8ufAQySrkYkR7Q4GEdikbwUlN5tiI6hC4H2zCPhvTAgJvGaW6HGFyPiPWvLS348fCJlZUTYYXhhk/UqjSaVlhoZmZoKJUaSiBe0mYRH7T4v37Rzh5rYz3/tjUAOOM3bkwE29CojoeXf31U72hMsYn+KUdTqEnT0y+90axvrKch0kBeVfxoyDDSK01Dq/TViuRB3owDqJWZvN9UcYw4Omcs/LNZEC2IEURV0bzQ9h1c1XsJV9D4uL8YqwLMYHQIaLd4UhGdfSKsXEcrK+dMtKsXKDb9euqU5B78/7LmJFbn/8V75xNxX+0ZDw6GI2JgvoVAFkeuZh8KiP3MrJK+PAmtT8OtUXH9fa6TKQxBVvLcJ5qSiUUw8QGPMzVGmaBJfYb/r1u4EvodqBfdgD1o/gm0Si45CtNZx9QPTYC44RS0AGQG7IZ/4aEJvPwk5NMGQfjjLaCAX1RJcmZZ0UZd/LZHuiE6nrWRM+uOD9xdOBzw21hoFH35DeiFbMcJmeOvXYcxOQFtMzu2qdhSYATi5dAsbOVCTxkefQy6DT0kvpeKqZUkcBDmpdAvwFXBuuB6V2lH/yuqJ8ArOGGRjvP7LRzQf6xuefG+NyQF2ROP3ycI7B+RGf7NlK3Rzt/4zW/mLLUtX/7SY2dBBxTm+F6ENofh3hAPTuV5kMV5hd6QvYSbOuMEZbwnbEA14QKaCB/QGRNJG4iJJYzGpHSZGT6tyC5wTOoC6LR/E2PkOiJswDHhAk4JH/AcEyn1HRPL9R+TsoXQHmNaa+wg2YcW9IadC7Mj4BpVaKcQGij9hf2UvWDTZfcfitIJ9+rI/OrcJ1YUeQ299W9m0UXh4j5imoY5sxuF/xGsHczG92cnEWsOLXBZnABb0Bt2TpjPyQm4Rs5OsDM07+4L+yl7YTdCSf9Q9IGCh3NetV7aiU+68jTqg1xv/RvLueiONYWL8+EVhxmJ7Ixs/I+Kg7UGCc/47hl3Fnnp1q69zCGaEddkNnhbiWRSSCWNdDKI/xi00SCLbHLI7fUHw9F4Mp3NF8vVerPd7Q/H0/lytc7sutNRfwMkkHEXhO+K6+C7Ncj8BJMaF5RGQ9eNAA/RhynzpJtIGTc9c7cZqEMjDp3r4sdLZaNI4I24rgvBZsx+3gtGrYkO+5HAJsG9TgCoulc0o9o/RX9jIcNGJc5f4AeCzaSpee5S8a733FWLXfOL/VGd5c2k1gLC3Usl9bQexbnDZ3/Nz+y+BFChmu7Mc9Ccdj7T6OfdHWHwthXqB9tkjLaLZEuFN2VueAteztFFe/diAQAA")
      format("woff2"),
    url("//at.alicdn.com/t/font_2355356_1u5a8mw8hce.woff?t=1611903002264") format("woff"),
    url("//at.alicdn.com/t/font_2355356_1u5a8mw8hce.ttf?t=1611903002264") format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_2355356_1u5a8mw8hce.svg?t=1611903002264#bb-icon") format("svg"); /* iOS 4.1- */
}

.bb-icon {
  font-family: "bb-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bb-icon-add:before {
  content: "\e664";
}

.bb-icon-add-circle:before {
  content: "\e665";
}

.bb-icon-browse:before {
  content: "\e666";
}

.bb-icon-bad:before {
  content: "\e667";
}

.bb-icon-cry:before {
  content: "\e66a";
}

.bb-icon-customer-service:before {
  content: "\e66b";
}

.bb-icon-fabulous:before {
  content: "\e66f";
}

.bb-icon-file:before {
  content: "\e671";
}

.bb-icon-good:before {
  content: "\e673";
}

.bb-icon-hide:before {
  content: "\e674";
}

.bb-icon-home:before {
  content: "\e675";
}

.bb-icon-map:before {
  content: "\e677";
}

.bb-icon-notification:before {
  content: "\e679";
}

.bb-icon-mic:before {
  content: "\e678";
}

.bb-icon-play:before {
  content: "\e67a";
}

.bb-icon-refresh:before {
  content: "\e67b";
}

.bb-icon-picture:before {
  content: "\e67c";
}

.bb-icon-success:before {
  content: "\e67f";
}

.bb-icon-setting:before {
  content: "\e67d";
}

.bb-icon-favorite-filling:before {
  content: "\e68a";
}

.bb-icon-filter-filling:before {
  content: "\e68b";
}

.bb-icon-news-filling:before {
  content: "\e68c";
}

.bb-icon-smile-filling:before {
  content: "\e68d";
}

.bb-icon-picture-filling:before {
  content: "\e68e";
}

.bb-icon-success-filling:before {
  content: "\e68f";
}

.bb-icon-warning-filling:before {
  content: "\e690";
}

.bb-icon-folder-filling:before {
  content: "\e691";
}

.bb-icon-map-filling:before {
  content: "\e692";
}

.bb-icon-moments:before {
  content: "\e941";
}

.bb-icon-taobao:before {
  content: "\e944";
}

.bb-icon-alipay:before {
  content: "\e946";
}

.bb-icon-wechat:before {
  content: "\e945";
}

.bb-icon-right:before {
  content: "\e600";
}

.bb-icon-left:before {
  content: "\e6a1";
}

.bb-icon-fire-o:before {
  content: "\e6a0";
}

.bb-icon-my-o:before {
  content: "\e635";
}

.bb-icon-car-o:before {
  content: "\e621";
}

.bb-icon-msg-o:before {
  content: "\e629";
}
</style>

