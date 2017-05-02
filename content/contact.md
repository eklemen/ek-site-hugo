+++
date = "2017-05-02T13:56:55-04:00"
draft = false
title = "contact"
weight = 0

+++

<form method="post" action="https://formspree.io/ejklemen@gmail.com">
	<div class="field half first">
		<label for="name">Name</label>
		<input type="text" name="name" id="name" />
	</div>
	<div class="field half">
		<label for="email">Email</label>
		<input type="email" name="_replyto" id="email" />
        <input type="text" name="_gotcha" style="display:none" />
	</div>
	<div class="field">
		<label for="message">Message</label>
		<textarea name="message" id="message" rows="4"></textarea>
	</div>
	<ul class="actions">
		<li><input type="submit" value="Send Message" class="special" /></li>
		<li><input type="reset" value="Reset" /></li>
	</ul>
</form>