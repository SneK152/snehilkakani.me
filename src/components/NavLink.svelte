<script lang="ts">
	import { activePage } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import Button from '@smui/button';
	import { Item } from '@smui/list';
	import { onMount } from 'svelte';
	import { changePage } from '../lib/page';
	export let href: string;
	export let mobile: boolean = false;
	$: modifiedHref = href === '/' ? '#home' : href.startsWith('/') ? href : `#${href}`;
	let active: boolean;
	let y: number;

	activePage.subscribe((v) => {
		active = v === href;
	});

	function onScroll(adjustedY?: number) {
		if (modifiedHref.startsWith('/')) return;
		const section = document.querySelector(modifiedHref) as HTMLElement;
		const fromTop = adjustedY || y;
		if (section === null) return;
		if (
			section.offsetTop - 65 <= fromTop &&
			section.offsetTop + section.offsetHeight - 64 >= fromTop
		) {
			activePage.set(href);
		}
	}

	const dispatch = createEventDispatcher();

	function onClick(e: CustomEvent<any>) {
		e.preventDefault();
		dispatch('click');
		if (modifiedHref.startsWith('/')) {
			history.pushState({}, '', '/music');
			window.location.href = '/music';
		} else {
			changePage(modifiedHref).then(() => {
				onScroll();
			});
		}
	}

	onMount(() => {
		onScroll();
	});
</script>

<svelte:window bind:scrollY={y} on:scroll|passive={() => onScroll()} />

{#if mobile}
	<Item activated={active} {href} on:click={onClick} ripple>
		<slot />
	</Item>
{:else}
	<Button
		variant="unelevated"
		color={active ? 'primary' : 'secondary'}
		ripple={false}
		on:click={onClick}
		class="nav-link-button"
		{href}
		touch
	>
		<slot />
	</Button>
{/if}
