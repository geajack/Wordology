window.addEventListener("load", init);

function init()
{
	document.getElementById("navButtonOptions").addEventListener("click",
		e => activateTab("options")
	);
	document.getElementById("navButtonDictionary").addEventListener("click",
		e => activateTab("dictionary")
	);
	document.getElementById("navButtonHelp").addEventListener("click",
		e => activateTab("help")
	);
	
	initDictionaryTab();
	initOptionsTab();
}

function activateTab(tabName)
{
	const ids =
	{
		"options"    : { tab: "navButtonOptions", page: "pageOptions" },
		"dictionary" : { tab: "navButtonDictionary", page: "pageDictionary" },
		"help"       : { tab: "navButtonHelp", page: "pageHelp" }
	};
	
	var tabs  = document.querySelectorAll("#navBar li");
	var pages = document.getElementsByClassName("page");
	for (tab of tabs)
	{
		tab.classList.remove("activeTab");
	}
	for (page of pages)
	{
		page.classList.remove("activePage");
	}
	
	document.getElementById(ids[tabName].tab).classList.add("activeTab");
	document.getElementById(ids[tabName].page).classList.add("activePage");
	
	document.dispatchEvent(new CustomEvent("tabChange", { detail: tabName }));
}
