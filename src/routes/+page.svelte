<script lang="ts">
    import * as stuffs from '../utils/stuffs';
    $: now = stuffs.default.date_to_string()
    $: h = new Date()
    setInterval(() => {
        h = new Date()
        now = stuffs.default.date_to_string(h)
    }, 100)
</script>

<body>
    <p>
        The time is {now}<br>
        Your time zone is {h.getTimezoneOffset()}
    </p>
</body>

<style>
    p {
        font-size: 2em;
        text-align: center;
    }
    body{
        background-color: #0d91e9;
    }
</style>