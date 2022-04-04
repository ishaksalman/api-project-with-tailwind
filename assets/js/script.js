$(function (){
    var $games = $('#games');

    $.ajax({
        type: 'GET',
        url: 'https://www.cheapshark.com/api/1.0/deals?games&title=batman&sortBy=savings',
        success: function(games){
            $.each(games, function(i, game) {
                $games.append(`
                    <div class="group relative">
                        <div class="relative bg-gray-200 group-hover:opacity-75 overflow-hidden w-full rounded-t-2xl">
                            <a href="#">
                                <img src="${game.thumb}" alt="" class="h-40 w-full">
                            </a>
                            <span class="absolute right-2 bottom-2 bg-green-500 text-white rounded-md p-1 text-sm">-${parseInt(game.savings).toFixed()}%</span>
                        </div>
                        <div class="p-4 flex flex-col rounded-b-2xl bg-white">
                            <h3 class="line-clamp-2 h-12"><a href="#">${game.title}</a></h3>
                            <p class="mt-1 text-sm text-gray-500">Rating: ${game.dealRating}</p>
                            <div class="flex justify-between mt-3">
                                <div class="flex items-center">
                                    <p class="font-medium mr-3 text-gray-900 text-xl">$${game.salePrice}</p>
                                    <p class="font-medium text-sm text-orange-500 line-through">$${game.normalPrice}</p>
                                </div>
                                <button type="button" class="px-6 py-2 font-medium rounded-md text-white bg-green-500 hover:bg-green-600 uppercase tracking-wider">Buy</button>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
    });
});