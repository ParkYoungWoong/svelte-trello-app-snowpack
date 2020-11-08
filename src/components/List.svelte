<script>
  import Sortable from 'sortablejs'
  import { onMount } from 'svelte'
  import { cards } from '~/store/list'
  import Card from '~/components/Card.svelte'
  import CreateCard from '~/components/CreateCard.svelte'
  import ListTitle from '~/components/ListTitle.svelte'

  export let list
  export let sortableLists

  let sortableCards
  let cardsEl

  function disableSortable(event) {
    console.log(event.detail)
    sortableLists.option('disabled', event.detail)
    sortableCards.option('disabled', event.detail)
  }

  onMount(() => {
    // For Cards
    sortableCards = new Sortable(cardsEl, {
      group: 'My Cards', // 한 목록에서 다른 목록으로 요소를 끌어오려면(DnD) 두 목록의 그룹 값이 같아야 합니다.
      handle: '.card', // 드래그 핸들이 될 요소의 선택자를 입력합니다.
      delay: 50, // 클릭이 밀리는 것을 방지하기 위해 약간의 지연 시간을 추가합니다.
      animation: 0, // 정렬할 때 애니메이션 속도(ms)를 지정합니다.
      forceFallback: true, // 다양한 환경의 일관된 Drag&Drop(DnD)을 위해 HTML5 기본 DnD 동작을 무시하고 내장 기능을 사용합니다.
      // 요소의 DnD가 종료되면 실행할 핸들러(함수)를 지정합니다.
      onEnd(event) {
        console.log(event) // event 객체의 정렬에 대한 다양한 정보가 들어있어요.
        cards.reorder({
          fromListId: event.from.dataset.listId,
          toListId: event.to.dataset.listId,
          oldIndex: event.oldIndex,
          newIndex: event.newIndex
        })
      }
    })
  })
</script>

<div class="list">
  <div class="list__inner">
    <div class="list__heading">
      <ListTitle
        {list}
        on:editMode={disableSortable} />
      <p>
        {list.cards.length} cards
      </p>
    </div>
    <div
      data-list-id={list.id}
      bind:this={cardsEl}
      class="list__cards">
      {#each list.cards as card (card.id)}
        <Card
          listId={list.id}
          {card}
          on:editMode={disableSortable} />
      {/each}
    </div>
    <CreateCard
      listId={list.id}
      on:editMode={disableSortable} />
  </div>
</div>

<style lang="scss">
  .list {
    word-break: break-all;
    white-space: normal;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    line-height: 20px;
    width: 290px;
    height: 100%;
    margin: 0 4px;
    user-select: none;
    :global(&.sortable-ghost) {
      opacity: 0.2;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        border-radius: 4px;
      }
    }
    :global(&.sortable-chosen) {
      cursor: move;
    }
    .list__inner {
      display: flex;
      flex-direction: column;
      max-height: 100%;
      box-sizing: border-box;
      padding: 10px 8px;
      background: #ebecf0;
      border-radius: 4px;
      .list__heading {
        margin-bottom: 10px;
        p {
          color: #5E6C84;
          padding: 0 8px;
        }
      }
      .list__cards {
        overflow-x: hidden;
        overflow-y: auto;
        margin-bottom: 10px;
      }
    }
  }
</style>
