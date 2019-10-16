"use strict";

class WordElement
{
	constructor(dom, text)
	{
		this.span = dom.createElement("span");
		this.span.textContent = text;
		this.span.setAttribute(WordElement.ATTRIBUTE_NAME, WordElement.ATTRIBUTE_UNDEFINED);

		this.word = text.toLowerCase();
		this.match = null;
		this.hidden = false;

		this.mouseOver  = new WordElementEvent();
		this.mouseOut   = new WordElementEvent();
		this.click      = new WordElementEvent();

		this.span.addEventListener("mouseover",
			(function onMouseOver(e)
			{
				if (!this.hidden)
				{
					this.mouseOver.dispatchEvent(
						{ target: this, domEvent: e }
					);
				}
			}).bind(this)
		);
		this.span.addEventListener("mouseout",
			(function onMouseOut(e)
			{
				if (!this.hidden)
				{
					this.mouseOut.dispatchEvent(
						{ target: this, domEvent: e }
					);
				}
			}).bind(this)
		);
		this.span.addEventListener("click",
			(function onClick(e)
			{
				if (!this.hidden)
				{
					this.click.dispatchEvent(
						{ target: this, domEvent: e }
					);
				}
			}).bind(this)
		);
	}

	hide()
	{
		this.span.setAttribute(WordElement.ATTRIBUTE_NAME, WordElement.ATTRIBUTE_HIDDEN);
		this.hidden = true;
	}

	show()
	{
		if (this.match)
		{
			if (this.hasExactMatch())
			{
				this.span.setAttribute(WordElement.ATTRIBUTE_NAME, WordElement.ATTRIBUTE_DEFINED);
			}
			else
			{
				this.span.setAttribute(WordElement.ATTRIBUTE_NAME, WordElement.ATTRIBUTE_SIMILAR);
			}
		}
		else
		{
			this.span.setAttribute(WordElement.ATTRIBUTE_NAME, WordElement.ATTRIBUTE_UNDEFINED);
		}
		this.hidden = false;
	}

	setData(match)
	{
		this.match = match;

		if (match.exact)
		{
			this.span.setAttribute(WordElement.ATTRIBUTE_NAME, WordElement.ATTRIBUTE_DEFINED);
		}
		else
		{
			this.span.setAttribute(WordElement.ATTRIBUTE_NAME, WordElement.ATTRIBUTE_SIMILAR);
		}
	}

	getWord()
	{
		return this.word;
	}

	getMatch()
	{
		return this.match;
	}

	hasExactMatch()
	{
		if (this.match)
		{
			return this.match.exact;
		}
		else
		{
			return false;
		}
	}

	hasMatch()
	{
		return this.match !== null;
	}

	showPopup()
	{
		if (!this.popup)
		{
			this.popup = document.createElement("span");
			this.popup.className = "wordology-popup";
			this.popup.style.display = "none";
			document.body.prepend(this.popup);
			this.popupBubble = document.createElement("span");
			this.popupTail = document.createElement("span");
			this.popupBubble.className = "wordology-popup-bubble"
			this.popupTail.className = "wordology-popup-tail";
		}

		this.popup.appendChild(this.popupBubble);
		this.popup.appendChild(this.popupTail);

		this.popupBubble.textContent = this.match.entry.definition;

		this.popup.style.display = "block";

		var wordLeft = this.span.getBoundingClientRect().left + pageXOffset;
		var wordTop  = this.span.getBoundingClientRect().top + pageYOffset;
		var wordWidth = this.span.getBoundingClientRect().width;
		var wordHeight = this.span.getBoundingClientRect().height;
		var popupHeight = this.popupBubble.scrollHeight + 5;
		var popupWidth = this.popupBubble.scrollWidth;

		const left = wordLeft + (wordWidth / 2) - (popupWidth/2) < 0;
		const right = wordLeft + (wordWidth/2) + (popupWidth/2) > window.innerWidth;
		const top = wordTop - this.popupBubble.scrollHeight - 5 < 0

		if (left)
		{
			this.popup.style.left = (wordLeft + wordWidth) + "px";
		}
		else if (right)
		{
			this.popup.style.left = (wordLeft - popupWidth) + "px";
		}
		else
		{
			this.popup.style.left = (wordLeft + (wordWidth - popupWidth)/2) + "px";
		}

		if (top)
		{
			this.popup.style.top = (wordTop + wordHeight + 5) + "px";
			this.popup.removeChild(this.popupBubble);
			this.popup.appendChild(this.popupBubble);
		}
		else
		{
			this.popup.style.top = (wordTop - this.popupBubble.scrollHeight - 5) + "px";
		}

		let tailClass;
		if (top)
		{
			if (left)
			{
				tailClass = WordElement.CSSClasses.TAIL_TOP_LEFT;
			}
			else if (right)
			{
				tailClass = WordElement.CSSClasses.TAIL_TOP_RIGHT;
			}
			else
			{
				tailClass = WordElement.CSSClasses.TAIL_TOP;
			}
		}
		else
		{
			if (left)
			{
				tailClass = WordElement.CSSClasses.TAIL_BOTTOM_LEFT;
			}
			else if (right)
			{
				tailClass = WordElement.CSSClasses.TAIL_BOTTOM_RIGHT;
			}
			else
			{
				tailClass =  WordElement.CSSClasses.TAIL_BOTTOM;
			}
		}

		for (let [key, cssClass] of Object.entries(WordElement.CSSClasses))
		{
			this.popupTail.classList.remove(cssClass);
		}
		this.popupTail.classList.add(tailClass);
	}

	hidePopup()
	{
		if (this.popup)
		{
			this.popup.style.display = "none";
		}
	}
}
Object.assign(WordElement,
	{
		ATTRIBUTE_NAME      : "wordology_word",
		ATTRIBUTE_UNDEFINED : "not_defined",
		ATTRIBUTE_DEFINED   : "defined",
		ATTRIBUTE_SIMILAR   : "similar",
		ATTRIBUTE_HIDDEN    : "hidden"
	}
);

WordElement.CSSClasses =
{
	TAIL_BOTTOM: "bottom",
	TAIL_TOP: "top",
	TAIL_TOP_LEFT: "top-left",
	TAIL_TOP_RIGHT: "top-right",
	TAIL_BOTTOM_LEFT: "bottom-left",
	TAIL_BOTTOM_RIGHT: "bottom-right"
};

class WordElementEvent
{
	constructor()
	{
		this.listeners = [];
	}

	addListener(f)
	{
		this.listeners.push(f);
	}

	dispatchEvent(details)
	{
		for (var f of this.listeners)
		{
			f(details);
		}
	}
}
