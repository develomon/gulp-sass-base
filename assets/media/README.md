# Video and audio

Video will be optimized for web with formats and dimensions.

## Video optimization with gulp

It will be implemented as a gulp command that does optimization during `gulp build` for production but also available as individual command.

(TODO)

## Video format use

The true problem is the lack of standard support in browsers so it has to be agreed with product owner.

We need to understand the difference between **video format** as a container for the video and **video encoding** as a way to encode and decode video into digital format.

### MP4

The MP4 container format with the H.264 video codec and the AAC audio codec is natively supported by desktop/mobile Internet Explorer, Safari and Chrome, but Chromium and Opera do not support the format. IE and Chrome also support the MP3 audio codec in the MP4 container, but Safari does not. Firefox/Firefox for Android/Firefox OS supports the format in some cases, but only when a third-party decoder is available, and the device hardware can handle the profile used to encode the MP4.

> **Note:** MP4s encoded with a high profile will not run on lower end hardware, such as low end Firefox OS phones.

### Ogg Theora Vorbis

The Ogg container format with the Theora video codec and the Vorbis audio codec is supported in desktop/mobile Gecko (Firefox), Chrome, and Opera, and support for the format can be added to Safari (but not on iOS) by installing an add-on. The format is not supported in Internet Explorer in any way.

WebM is generally preferred over Ogg Theora Vorbis when available, because it provides a better compression to quality ratio and is supported in more browsers. The Ogg format can however be used to support older browser versions (for example Firefox 3.5/3.6 don't support WebM, but do support Ogg.)

### WebM

The WebM format is based on a restricted version of the Matroska container format. It always uses the VP8 or VP9 video codec and the Vorbis or Opus audio codec. WebM is natively supported in desktop and mobile Gecko (Firefox), Chrome and Opera, and support for the format can be added to Internet Explorer and Safari (but not on iOS) by installing an add-on.


## Audio

## MP3

The MP3 audio format (.mp3, audio/mpeg; distinct from the above MP3 audio in an MP4 container case) is supported in `<audio>` by Firefox/Firefox for Android/Firefox OS when the operating system provides an MP3 decoder, and by Internet Explorer, Chrome and Safari.

## WAVE PCM

The WAVE container format, with the PCM audio codec (WAVE codec "1") is supported by desktop/mobile Gecko (Firefox) and Safari. Files in the WAVE container format typically end with the `.wav` extension.
