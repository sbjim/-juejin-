$(function() {
	var topic_lists = []; // 记录已经打开pin的ids
	var base_url = ''; // 当前的网页，用于监听是否切换了新的页面，重新点击沸点


	// 监听url是否发生了变化
	setInterval(function() {
		if (base_url != window.location.href) {
			base_url = window.location.href;
			topic_lists = [];
		}
	},500);

	// 监听url是否发生了 是否存在广告
	setInterval(function() {
		
		// 主页 timeline
		$("aside.index-aside.aside").remove();
		
		// 文章的left 点赞，分享等
		$(".article-suspended-panel.article-suspended-panel").remove();
		
		// 关于作者
		$("div.block-body").remove();  
		
		$(".sidebar-block.author-block.shadow").remove();  
		
		$(".sidebar-block.related-entry-sidebar-block.shadow").remove();  
		// 广告小册
		$(".sidebar-block.recommend.recommend-index.shadow").remove();

		// 客户端
		$(".sidebar-block.app-download-sidebar-block.shadow").remove();
		//官方微信群
		$(".sidebar-block.wechat-sidebar-block.pure").remove();
		
		//官方微信群
		$("div.article-banner").remove();
		
		//相关推荐
		$(".main-area.recommended-area.shadow").remove();
	},200);


	// 点击
	setInterval(function() {
		// 打开评论
		var items = document.querySelectorAll("div.pin");

		for (let i = 0; i < items.length; i++) {
			var item = items[i];

			// 用户id
			var topic_text = item.childNodes[1].childNodes[0].childNodes[1].childNodes[1].innerHTML;
			var topic_array = topic_text.match(/\/pin\/(.+)\" target=/);
			var pinId = topic_array[1];

			// 点赞的
			if (topic_lists.indexOf(pinId) === -1) { // 新的沸点
				item.querySelector("div.comment-action.action").click(); //打开评论
				// item.querySelector("div.like-action.action").click(); //点赞   有问题，有时间待完善
				topic_lists.push(pinId) // 沸点的Id 入库
			}
		}


		// 评论的内容 加载更多
		var fetch_more_comments = document.querySelectorAll("div.fetch-more-comment")
		for (let ii = 0; ii < fetch_more_comments.length; ii++) {
			fetch_more_comments[ii].click();
		}

	}, 1000);


})
