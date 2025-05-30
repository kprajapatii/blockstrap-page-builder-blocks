// MIT LICENSE https://raw.githubusercontent.com/vianetz/animated-headlines-vanilla/refs/heads/master/LICENSE.txt
(() => {
	"use strict";
	var e,
		t = {
			645: (e, t, n) => {
				var i = n(842);
				window.AnimatedHeadline = i.AnimatedHeadline;
			},
			842: (e, t) => {
				function n(e) {
					return (
						(n =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (e) {
									return typeof e;
								}
								: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
							n(e)
					);
				}
				function i(e, t, n, i) {
					var o = r(l(1 & i ? e.prototype : e), t, n);
					return 2 & i && "function" == typeof o
						? function (e) {
							return o.apply(n, e);
						}
						: o;
				}
				function r() {
					return (
						(r =
							"undefined" != typeof Reflect && Reflect.get
								? Reflect.get.bind()
								: function (e, t, n) {
									var i = (function (e, t) {
										for (; !{}.hasOwnProperty.call(e, t) && null !== (e = l(e)); );
										return e;
									})(e, t);
									if (i) {
										var r = Object.getOwnPropertyDescriptor(i, t);
										return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
									}
								}),
							r.apply(null, arguments)
					);
				}
				function o(e, t, i) {
					return (
						(t = l(t)),
							(function (e, t) {
								if (t && ("object" == n(t) || "function" == typeof t)) return t;
								if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
								return (function (e) {
									if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return e;
								})(e);
							})(e, a() ? Reflect.construct(t, i || [], l(e).constructor) : t.apply(e, i))
					);
				}
				function a() {
					try {
						var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
					} catch (e) {}
					return (a = function () {
						return !!e;
					})();
				}
				function l(e) {
					return (
						(l = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
							}),
							l(e)
					);
				}
				function s(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && u(e, t);
				}
				function u(e, t) {
					return (
						(u = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (e, t) {
								return (e.__proto__ = t), e;
							}),
							u(e, t)
					);
				}
				function c(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
				}
				function h(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						(i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, v(i.key), i);
					}
				}
				function f(e, t, n) {
					return t && h(e.prototype, t), n && h(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
				}
				function d(e, t, n) {
					return (t = v(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
				}
				function v(e) {
					var t = (function (e, t) {
						if ("object" != n(e) || !e) return e;
						var i = e[Symbol.toPrimitive];
						if (void 0 !== i) {
							var r = i.call(e, t || "default");
							if ("object" != n(r)) return r;
							throw new TypeError("@@toPrimitive must return a primitive value.");
						}
						return ("string" === t ? String : Number)(e);
					})(e, "string");
					return "symbol" == n(t) ? t : t + "";
				}
				function y(e, t, n) {
					(function (e, t) {
						if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
					})(e, t),
						t.set(e, n);
				}
				function m(e, t) {
					return e.get(b(e, t));
				}
				function p(e, t, n) {
					return e.set(b(e, t), n), n;
				}
				function b(e, t, n) {
					if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
					throw new TypeError("Private element is not present on this object");
				}
				var g, w;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.AnimationType = void 0),
					(t.AnimatedHeadline = function(e) {
						var t,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							i = (typeof e === 'string') ? document.querySelector(e) : e;

						// If a given option is not defined in the provided object,
						// try to get it from the element's data attributes.
						// (Data attribute names are written in kebab-case.)
							n.animationType = n.animationType || i.getAttribute('data-animation-type') || 'clip';
							n.animationDelay = n.animationDelay || Number(i.getAttribute('data-animation-delay')) || 2500;
						n.revealAnimationDelay = n.revealAnimationDelay || Number(i.getAttribute('data-reveal-animation-delay')) || 1500;
						n.revealDuration = n.revealDuration || Number(i.getAttribute('data-reveal-duration')) || 600;
						n.lettersDelay = n.lettersDelay || Number(i.getAttribute('data-letters-delay')) || 50;
						n.typeAnimationDelay = n.typeAnimationDelay || Number(i.getAttribute('data-type-animation-delay')) || 1300;
						n.selectionDuration = n.selectionDuration || Number(i.getAttribute('data-selection-duration')) || 500;
						// For the LoadingBar (if used)
						n.barAnimationDelay = n.barAnimationDelay || Number(i.getAttribute('data-bar-animation-delay')) || 3800;
						n.barWaiting = n.barWaiting || Number(i.getAttribute('data-bar-waiting')) || 800;

						// Now choose and initialize the animation type based on n.animationType.
						switch (n.animationType) {
							case g.Clip:
								t = new x(i, n.animationDelay, n.revealAnimationDelay, n.revealDuration);
								break;
							case g.LoadingBar:
								t = new E(i, n.barAnimationDelay, n.barWaiting);
								break;
							case g.Push:
							case g.Slide:
							case g.Rotate1:
							case g.Zoom:
								t = new D(i, n.animationDelay);
								break;
							case g.Scale:
							case g.Rotate2:
							case g.Rotate3:
								t = new S(i, n.animationDelay, n.lettersDelay);
								break;
							case g.Type:
								t = new O(i, n.animationDelay, n.lettersDelay, n.typeAnimationDelay, n.selectionDuration);
								break;
							default:
								throw "invalid animation type " + n.animationType;
						}
						return i.classList.add("bs-" + n.animationType), t;
					}
			),
					(function (e) {
						(e.Clip = "clip"),
							(e.LoadingBar = "loading-bar"),
							(e.Push = "push"),
							(e.Rotate1 = "rotate-1"),
							(e.Rotate2 = "rotate-2"),
							(e.Rotate3 = "rotate-3"),
							(e.Scale = "scale"),
							(e.Slide = "slide"),
							(e.Type = "type"),
							(e.Zoom = "zoom");
					})(g || (t.AnimationType = g = {})),
					(function (e) {
						(e[(e.AnimationDelay = 2500)] = "AnimationDelay"), (e[(e.LettersDelay = 50)] = "LettersDelay");
					})(w || (w = {}));
				var k = new WeakMap(),
					D = (function () {
						return f(
							function e(t) {
								var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.AnimationDelay;
								c(this, e),
									y(this, k, !1),
									d(this, "duration", 0),
									d(this, "animationDelay", void 0),
									d(this, "rootElement", void 0),
									d(this, "wordSelector", "b"),
									d(this, "visibleClassName", "is-visible"),
									d(this, "hiddenClassName", "is-hidden"),
									(this.rootElement = t),
									(this.animationDelay = n),
									(this.duration = n),
									this.init(),
									// Force correct width on initialization
									this.rootElement.style.width = this.current().offsetWidth + 'px',
									this.start();
							},
							[
								{
									key: "init",
									value: function () {
										this.resize();
									},
								},
								{
									key: "resize",
									value: function () {
										var e = 0;
										this.rootElement.querySelectorAll(this.wordSelector).forEach(function (t) {
											e = Math.max(t.offsetWidth, e);
										}),
											(this.rootElement.style.width = e.toString());
									},
								},
								{
									key: "resizeToWord",
									value: function (word) {
										this.rootElement.style.width = word.offsetWidth + 'px';
									},
								},
								{
									key: "start",
									value: function () {
										var e = this;
										p(k, this, !1),
											this.runAfter(this.duration, function () {
												return e.next();
											});
									},
								},
								{
									key: "stop",
									value: function () {
										p(k, this, !0);
									},
								},
								{
									key: "current",
									value: function () {
										var e = this.rootElement.querySelector(this.wordSelector + "." + this.visibleClassName);
										return null === e ? this.rootElement.querySelector(this.wordSelector) : e;
									},
								},
								{
									key: "next",
									value: function () {
										var e = this,
											t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
										if (null !== (t = null != t ? t : this.current())) {
											var n = this.getNextWord(t),
												currentWidth = t.offsetWidth,
												nextWidth = n.offsetWidth;
											if (nextWidth > currentWidth) {
												this.resizeToWord(n);
											} else {
												var letterDelay = this.lettersDelay || 50; // or any base value you prefer
												var delay = letterDelay * n.textContent.trim().length;
												this.runAfter(delay, () => {
													this.resizeToWord(n);
												});
											}
											this.runAfter(400, function () {
												e.switchWord(t, n),
													e.runAfter(e.animationDelay, function () {
														return e.next(n);
													});
											});
										}
									},
								},
								{
									key: "getNextWord",
									value: function (e) {
										return e.nextElementSibling ? e.nextElementSibling : e.parentNode.children[0];
									},
								},
								{
									key: "switchWord",
									value: function (e, t) {
										this.makeHidden(e), this.makeVisible(t);
									},
								},
								{
									key: "makeVisible",
									value: function (e) {
										e.classList.remove(this.hiddenClassName), e.classList.add(this.visibleClassName);
									},
								},
								{
									key: "makeHidden",
									value: function (e) {
										e.classList.remove(this.visibleClassName), e.classList.add(this.hiddenClassName);
									},
								},
								{
									key: "runAfter",
									value: function (e, t) {
										var n = this;
										!(function (e, t, n) {
											var i = performance.now();
											requestAnimationFrame(function r(o) {
												var a = (o - i) / n;
												a > 1 && (a = 1);
												var l = e(a);
												t(l), a < 1 && requestAnimationFrame(r);
											});
										})(
											function (e) {
												return e;
											},
											function (e) {
												if (m(k, n)) throw "execution aborted";
												1 === e && t();
											},
											e
										);
									},
								},
							]
						);
					})(),
					S = (function (e) {
						function t(e) {
							var n,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.AnimationDelay,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.LettersDelay;
							return (
								c(this, t),
									d((n = o(this, t, [e, i])), "lettersDelay", void 0),
									d(n, "letterClassName", "letter"),
									(n.lettersDelay = r),
									n.rootElement.querySelectorAll(n.wordSelector).forEach(n.splitIntoSingleLetters, n),
									n
							);
						}
						return (
							s(t, e),
								f(t, [
									{
										key: "next",
										value: function () {
											var currentWord = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
											// Use current word if not provided.
											if (null !== (currentWord = null != currentWord ? currentWord : this.current())) {
												var nextWord = this.getNextWord(currentWord),
													currentWidth = currentWord.offsetWidth,
													nextWidth = nextWord.offsetWidth;
												// If the next word is wider, resize the container before the letter transition.
												if (nextWidth > currentWidth) {
													this.resizeToWord(nextWord);
												}
												var condition =
													currentWord.querySelectorAll("." + this.letterClassName).length >=
													nextWord.querySelectorAll("." + this.letterClassName).length;
												this.hideLetter(currentWord.querySelector("." + this.letterClassName), currentWord, condition);
												this.showLetter(nextWord.querySelector("." + this.letterClassName), nextWord, !condition);
												// If the next word is smaller, delay resizing until after the transition.
												if (nextWidth <= currentWidth) {
													this.runAfter(this.lettersDelay * nextWord.textContent.trim().length+ 500, () => {
														this.resizeToWord(nextWord);
													});
												}
											}
										},
									},
									{
										key: "hideLetter",
										value: function (e, t, n) {
											this.hideOrShowLetter(e, t, n, !0);
										},
									},
									{
										key: "showLetter",
										value: function (e, t, n) {
											this.hideOrShowLetter(e, t, n, !1);
										},
									},
									{
										key: "hideOrShowLetter",
										value: function (e, t) {
											var n = this,
												i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
												r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
											r
												? this.makeHidden(e)
												: this.makeVisible(e),
												e.nextElementSibling
													? this.runAfter(this.lettersDelay, function () {
														return n.hideOrShowLetter(e.nextElementSibling, t, i, r);
													})
													: i &&
													this.runAfter(this.animationDelay, function () {
														return n.next(r ? n.getNextWord(t) : t);
													});
										},
									},
									{
										key: "splitIntoSingleLetters",
										value: function (e) {
											var t = this.visibleClassName,
												n = e.textContent.split(""),
												i = e.classList.contains(t);
											for (var r in n) {
												var o = document.createElement("span");
												o.classList.add(this.letterClassName), i && o.classList.add(t), (o.innerHTML = n[r]), (n[r] = o.outerHTML);
											}
											(e.innerHTML = n.join("")), (e.style.opacity = "1");
										},
									},
								]),
								t
						);
					})(D),
					A = new WeakMap(),
					L = new WeakMap(),
					O = (function (e) {
						function t(e) {
							var n,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.AnimationDelay,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.LettersDelay,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1300,
								l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 500;
							return (
								c(this, t),
									y((n = o(this, t, [e, i, r])), A, "waiting"),
									y(n, L, "selected"),
									d(n, "typeAnimationDelay", void 0),
									d(n, "selectionDuration", void 0),
									(n.typeAnimationDelay = a),
									(n.selectionDuration = l),
									n
							);
						}
						return (
							s(t, e),
								f(t, [
									{ key: "resize", value: function () {} },
									{
										key: "showWord",
										value: function (e) {
											this.showLetter(e.querySelector("." + this.letterClassName), e), this.makeVisible(e);
										},
									},
									{
										key: "next",
										value: function () {
											var e = this,
												t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
											if (null !== (t = null != t ? t : this.current())) {
												var n = this.getNextWord(t),
													i = t.parentNode;
												i.classList.add(m(L, this)),
													i.classList.remove(m(A, this)),
													this.runAfter(this.selectionDuration, function () {
														i.classList.remove(m(L, e)),
															e.makeHidden(t),
															t.querySelectorAll("." + e.letterClassName).forEach(function (t) {
																e.makeHidden(t);
															});
													}),
													this.runAfter(this.typeAnimationDelay, function () {
														return e.showWord(n);
													});
											}
										},
									},
									{
										key: "showLetter",
										value: function (e, n) {
											var r = this,
												o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
											i(t, "showLetter", this, 3)([e, n, o]),
											e.nextElementSibling ||
											this.runAfter(200, function () {
												return n.parentNode.classList.add(m(A, r));
											});
										},
									},
								])
						);
					})(S),
					x = (function (e) {
						function t(e) {
							var n,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.AnimationDelay,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1500,
								a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 600;
							return c(this, t), d((n = o(this, t, [e, i])), "revealAnimationDelay", void 0), d(n, "revealDuration", void 0), (n.revealAnimationDelay = r), (n.revealDuration = a), n;
						}
						return (
							s(t, e),
								f(t, [
									{
										key: "resize",
										value: function () {
											this.rootElement.style.width = String(this.rootElement.offsetWidth + 10);
										},
									},
									{
										key: "showWord",
										value: function (e) {
											var t = this;
											e.parentNode.style.width = 'unset';
											e.parentNode.animate([{ width: "2px" }, { width: e.offsetWidth + "px" }], { duration: this.revealDuration }).onfinish = function (n) {
												// Explicitly set the container to the final word width so that it’s not left at a transient fixed width.
												//e.parentNode.style.width = e.offsetWidth + "px";

												// Then delay the next animation using the proper delay value.
												t.runAfter(t.animationDelay, function () {
													return t.next(e);
												});
											};

										},
									},
									{
										key: "next",
										value: function () {
											var e = this,
												t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
											if (null !== (t = null != t ? t : this.current())) {
												var n = this.getNextWord(t);
												t.parentNode.animate([{ width: t.offsetWidth + "px" }, { width: "2px" }], { duration: this.revealDuration }).onfinish = function (i) {
													e.switchWord(t, n), e.showWord(n);
												};
											}
										},
									},
								])
						);
					})(D),
					N = new WeakMap(),
					E = (function (e) {
						function t(e) {
							var n,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3800,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 800;
							return c(this, t), y((n = o(this, t, [e, i])), N, "is-loading"), d(n, "barWaiting", void 0), (n.barWaiting = r), n;
						}
						return (
							s(t, e),
								f(t, [
									{
										key: "init",
										value: function () {
											var e = this;
											i(t, "init", this, 3)([]),
												this.runAfter(this.barWaiting, function () {
													return e.rootElement.classList.add(m(N, e));
												});
										},
									},
									{
										key: "next",
										value: function () {
											var e = this,
												n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
											i(t, "next", this, 3)([n]),
											null !== (n = null != n ? n : this.current()) &&
											(n.parentNode.classList.remove(m(N, this)),
												this.runAfter(this.barWaiting, function () {
													return n.parentNode.classList.add(m(N, e));
												}));
										},
									},
								])
						);
					})(D);
			},
			460: () => {},
			451: () => {},
		},
		n = {};
	function i(e) {
		var r = n[e];
		if (void 0 !== r) return r.exports;
		var o = (n[e] = { exports: {} });
		return t[e](o, o.exports, i), o.exports;
	}
	(i.m = t),
		(e = []),
		(i.O = (t, n, r, o) => {
			if (!n) {
				var a = 1 / 0;
				for (c = 0; c < e.length; c++) {
					for (var [n, r, o] = e[c], l = !0, s = 0; s < n.length; s++)
						(!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](n[s])) ? n.splice(s--, 1) : ((l = !1), o < a && (a = o));
					if (l) {
						e.splice(c--, 1);
						var u = r();
						void 0 !== u && (t = u);
					}
				}
				return t;
			}
			o = o || 0;
			for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
			e[c] = [n, r, o];
		}),
		(i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(() => {
			var e = { 547: 0, 700: 0, 750: 0 };
			i.O.j = (t) => 0 === e[t];
			var t = (t, n) => {
					var r,
						o,
						[a, l, s] = n,
						u = 0;
					if (a.some((t) => 0 !== e[t])) {
						for (r in l) i.o(l, r) && (i.m[r] = l[r]);
						if (s) var c = s(i);
					}
					for (t && t(n); u < a.length; u++) (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
					return i.O(c);
				},
				n = (self.webpackChunk_vianetz_animated_headlines_vanilla = self.webpackChunk_vianetz_animated_headlines_vanilla || []);
			n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
		})(),
		i.O(void 0, [700, 750], () => i(645)),
		i.O(void 0, [700, 750], () => i(460));
	var r = i.O(void 0, [700, 750], () => i(451));
	r = i.O(r);
})();

// Initialize on document ready
jQuery(document).ready(function () {
	bs_init_animated_headline();
});

window.bs_init_animated_headline = function (elements = null) {
	try {
		const $ = jQuery;
		const runInit = ($el) => {
			const id = $el.attr('id');
			if (!id) return;
			if (!$el.attr('data-animated-headline-initialized')) {
				AnimatedHeadline($el[0]);
				$el.attr('data-animated-headline-initialized', 'true');
			}
		};

		if (Array.isArray(elements)) {
			elements.forEach(el => runInit($(el)));
		} else {
			$('.bs-headline-text-rotating.bs-words-wrapper').each(function () {
				runInit($(this));
			});
		}
	} catch (error) {
		console.error('Error initializing animated headlines:', error);
	}
};




