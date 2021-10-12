echo "requesting all heroes"
curl localhost:3000/heroes

echo "requesting flash"
curl localhost:3000/heroes/1

echo "requesting with wrong body"
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo "creating chapolin"
CREATE=$(curl --silent -X POST \
    --data-binary '{"name": "Chapolin", "age": 101, "power": "strength"}' \
    localhost:3000/heroes)
echo $CREATE

ID=$(echo $CREATE | jq .id)
echo $ID

echo "requesting chapolin"
curl localhost:3000/heroes/$ID