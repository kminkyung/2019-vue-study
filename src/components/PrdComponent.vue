<template>
	<div v-if="isSubmit">
		<div class="my-2">
			<span class="f-125 text-primary">상품 리스트 보기</span>
			<i class="fas fa-angle-down pointer" v-on:click="onTogglePrd"
				v-bind:class="{'fa-angle-down': !isPrdShow, 'fa-angle-up': isPrdShow}"></i>
		</div>
		<div class="prd-wrap">
			<ul class="prds d-flex justify-content-between" v-if="isPrdShow">
				<li class="prd mb-5" style="flex: 32% 0 0;" v-for="item in items" v-bind:key="item.id">
					<div><img v-bind:src="item.src" class="w-100"></div>
					<div class="f-125 py-1">{{item.title}}</div>
					<div class="f-0875 text-secondary py-1">{{item.desc}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import PrdResult from '../models/PrdResult.js'

	export default {
		props: ['query'],
		data() {
			return {
				isPrdShow: false,
				isSubmit: false,
				items: []
			}
		},
		watch: {
			query(newVal, oldVal) {
				this.prdSearch();
			}
		},
		methods: {
			onTogglePrd(e) {
				this.isPrdShow = !this.isPrdShow;
			},
			onSubmit(e) {
				this.$emit('@submit', this.query);
			},
			prdSearch() {
				if (this.query != "") {
					PrdResult.list(this.query).then((result) => {
						this.isSubmit = true;
						this.isPrdShow = true;
						this.items = result;
					});
				} else {
					this.isSubmit = false;
					this.isPrdShow = false;
					this.items = [];
				}
			}
		}
	}
</script>